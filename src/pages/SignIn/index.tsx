import React, { useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        // console.log(err.response);
        alert(err.response.data.errors.message);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Helmet>
        <title>Sign In | Adapto</title>
        <meta
          name="description"
          content="A melhor plataforma para visualizar informações sobre livros. Entre agora e descubra novas indicações de literaturas para você!"
        />
      </Helmet>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />{' '}
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Carregando...' : 'Send'}
        </button>
      </form>
    </Container>
  );
};
