import React, { useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

// import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Wrapper,
  Container,
  Card,
  Title,
  FooterSection,
  FooterContainer,
} from './styles';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

const resetPasswordFormSchema = yup.object().shape({
  password: yup.string().required('Senha é um campo obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirmar senha é um campo obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});

export const ResetPassword: React.FC = () => {
  const { search } = useLocation();
  const { token, email } = queryString.parse(search);

  console.log(token, email);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetPasswordFormSchema),
  });

  const handleChangePassword = useCallback(async (values) => {
    console.log(values);
    // try {
    //   await signIn(signInCredentials);
    // } catch (err) {
    //   const { status } = err.response;

    //   if (status === 404 || status === 401) {
    //     toast.error('Falha ao realizar o login (credenciais inválidas).');
    //     return;
    //   }

    //   toast.error('Erro interno de servidor.');
    // }
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Helmet>
          <title>Recuperar Senha | Adapto</title>
          <meta
            name="description"
            content="Descrição padrão para essa tela para melhorar a indexação da página nos crawlers."
          />
        </Helmet>

        <Card>
          <Title>Recuperar a Senha</Title>

          <form onSubmit={handleSubmit(handleChangePassword)}>
            <Input
              label="Nova senha"
              labelFor="password"
              type="password"
              placeholder="Digite a nova senha"
              error={errors.password}
              {...register('password')}
              passwordInput
            />

            <Input
              label="Confirmar senha"
              labelFor="confirmPassword"
              type="confirmPassword"
              placeholder="Repita a nova senha"
              error={errors.confirmPassword}
              {...register('confirmPassword')}
              passwordInput
            />

            <Button
              buttonType="solid"
              variant="primary"
              text="Redefinir"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              style={{ marginTop: '1.5rem' }}
            />
          </form>
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
