import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';
import {
  Wrapper,
  Container,
  FooterSection,
  FooterContainer,
  Card,
  Title,
  Text,
  SignInContainer,
  SignInButton,
} from './styles';
import { api } from '../../services/api';
import { Footer } from '../../components/Footer';

type SignUpFormData = {
  name: string;
  cnpj: string;
  email: string;
  password: string;
};

const refugeeFormSchema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

const businessFormSchema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  cnpj: yup.string().required('CNPJ é um campo obrigatório'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

export const SignUp: React.FC = () => {
  const [type, setType] = useState('');
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(
      type === 'refugee' ? refugeeFormSchema : businessFormSchema,
    ),
  });

  const handleSignUp: SubmitHandler<SignUpFormData> = async (values) => {
    const data = {
      fullName: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      if (type === 'refugee') {
        await api.post('/refugee', data);
      } else {
        await api.post('/enterprise', { ...data, cnpj: values.cnpj });
      }

      toast.success('Conta criada com sucesso.');

      history.push('/');
    } catch (err) {
      const { status } = err.response;

      if (status === 409) {
        toast.error('Email já cadastrado na plataforma.');
        return;
      }

      toast.error('Erro interno de servidor.');
    }
  };

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Helmet>
          <title>Cadastrar | Adapto</title>
          <meta
            name="description"
            content="Cadastre-se na plataforma para divulgar seu portifólio, vagas e ficar cada vez menos distante do mercado de trabalho."
          />
        </Helmet>

        <Card>
          {type ? (
            <>
              <Title>Criar conta!</Title>

              <form onSubmit={handleSubmit(handleSignUp)}>
                <Input
                  label="Nome"
                  labelFor="name"
                  type="text"
                  placeholder="Digite seu nome"
                  error={errors.name}
                  {...register('name')}
                />

                {type === 'business' && (
                  <Input
                    label="CNPJ"
                    labelFor="cnpj"
                    type="text"
                    placeholder="Digite o CNPJ da empresa"
                    error={errors.cnpj}
                    {...register('cnpj')}
                  />
                )}

                <Input
                  label="Email"
                  labelFor="email"
                  type="email"
                  placeholder="Digite seu email"
                  error={errors.email}
                  {...register('email')}
                />

                <Input
                  label="Senha"
                  labelFor="password"
                  type="password"
                  placeholder="Digite sua senha"
                  error={errors.password}
                  {...register('password')}
                  passwordInput
                />

                <Button
                  buttonType="solid"
                  variant="primary"
                  text="Cadastrar"
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  style={{ marginTop: '2rem' }}
                />
              </form>

              <SignInContainer>
                <SignInButton to="/login">Já tenho uma conta</SignInButton>
              </SignInContainer>
            </>
          ) : (
            <>
              <Title>Olá!</Title>

              <Text>
                Nos ajude a te indetificar para o seu cadastro ser continuado!
              </Text>

              <Button
                buttonType="solid"
                variant="primary"
                text="Refugiado ou imigrante"
                type="button"
                style={{ marginTop: '3rem' }}
                onClick={() => setType('refugee')}
              />

              <Button
                buttonType="outline"
                variant="primary"
                text="Empresa"
                type="button"
                style={{ marginTop: '1rem' }}
                onClick={() => setType('business')}
              />
            </>
          )}
        </Card>
      </Container>

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>
    </Wrapper>
  );
};
