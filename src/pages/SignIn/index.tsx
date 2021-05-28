import React, { useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../contexts/auth';

import {
  Wrapper,
  Container,
  Card,
  Title,
  FooterSection,
  FooterContainer,
  LineContainer,
  Line,
  LineText,
  SignUpContainer,
  SignUpButton,
} from './styles';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

export const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (signInCredentials) => {
      try {
        await signIn(signInCredentials);
      } catch (err) {
        const { status } = err.response;

        if (status === 404 || status === 401) {
          toast.error('Falha ao realizar o login (credenciais inválidas).');
          return;
        }

        toast.error('Erro interno de servidor.');
      }
    },
    [signIn],
  );

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Helmet>
          <title>Login | Adapto</title>
          <meta
            name="description"
            content="Descrição padrão para essa tela para melhorar a indexação da página nos crawlers."
          />
        </Helmet>

        <Card>
          <Title>Entrar</Title>

          <form onSubmit={handleSubmit(handleSignIn)}>
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
              text="Entrar"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              style={{ marginTop: '2rem' }}
            />
          </form>

          <LineContainer>
            <Line />
            <LineText>ou</LineText>
            <Line />
          </LineContainer>

          <SignUpContainer>
            <SignUpButton to="/register">Criar minha conta</SignUpButton>
          </SignUpContainer>
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
