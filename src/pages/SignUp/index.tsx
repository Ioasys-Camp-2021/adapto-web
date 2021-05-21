import React from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link } from 'react-router-dom';

import { Container } from './styles';
import { api } from '../../services/api';

type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const signUpFormSchema = yup.object().shape({
  firstName: yup.string().required('Primeiro nome é um campo obrigatório'),
  lastName: yup.string().required('Sobrenome é um campo obrigatório'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirmar senha é um campo obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});

export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema),
  });

  const handleSignUp: SubmitHandler<SignUpFormData> = async (values) => {
    try {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      await api.post('/user', data);

      alert('Usuário criado com sucesso.');
    } catch (err) {
      const { status } = err.response;

      if (status === 409) {
        alert('Email já cadastrado na plataforma');
        return;
      }

      alert('Erro interno de servidor.');
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Cadastrar | Adapto</title>
        <meta
          name="description"
          content="Descrição padrão para essa tela para melhorar a indexação da página nos crawlers."
        />
      </Helmet>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <input
          type="text"
          placeholder="First name"
          {...register('firstName')}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <input type="text" placeholder="Last name" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />{' '}
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword')}
        />{' '}
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Carregando...' : 'Send'}
        </button>
      </form>

      <Link to="/">Login</Link>
    </Container>
  );
};
