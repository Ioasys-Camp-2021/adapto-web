import React, { useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../contexts/auth';

import { Container } from './styles';

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

        if (status === 404) {
          alert('Falha ao realizar o login (credenciais inválidas).');
          return;
        }

        alert('Erro interno de servidor.');
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Helmet>
        <title>Login | Adapto</title>
        <meta
          name="description"
          content="Descrição padrão para essa tela para melhorar a indexação da página nos crawlers."
        />
      </Helmet>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          label="Email"
          labelFor="email"
          type="email"
          placeholder="Informe seu email"
          error={errors.email}
          {...register('email')}
        />

        <Input
          label="Senha"
          labelFor="password"
          type="password"
          placeholder="Informe sua senha"
          error={errors.password}
          {...register('password')}
          passwordInput
        />

        <Button
          buttonType="solid"
          variant="primary"
          text="Entrar"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        />
      </form>

      <Link to="/register">Cadastrar</Link>
    </Container>
  );
};
