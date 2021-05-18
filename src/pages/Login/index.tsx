import React from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { useHistory } from 'react-router-dom';

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

export const Login: React.FC = () => {
  // const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Helmet>
        <title>Login | Adapto</title>
        <meta
          name="description"
          content="A melhor plataforma para visualizar informações sobre livros. Entre agora e descubra novas indicações de literaturas para você!"
        />
      </Helmet>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <input type="email" placeholder="Email" {...register('email')} />
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Carregando...' : 'Send'}
        </button>
      </form>
    </Container>
  );
};
