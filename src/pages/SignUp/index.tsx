import React from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

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
  const history = useHistory();

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

      toast.success('Usuário criado com sucesso.');

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
    <Container>
      <Helmet>
        <title>Cadastrar | Adapto</title>
        <meta
          name="description"
          content="Descrição padrão para essa tela para melhorar a indexação da página nos crawlers."
        />
      </Helmet>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <Input
          label="Primeiro nome"
          labelFor="firstName"
          type="text"
          placeholder="Digite seu primeiro nome"
          error={errors.firstName}
          {...register('firstName')}
        />

        <Input
          label="Último nome"
          labelFor="lastName"
          type="text"
          placeholder="Digite seu último nome"
          error={errors.lastName}
          {...register('lastName')}
        />

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

        <Input
          label="Confirmação de senha"
          labelFor="confirmPassword"
          type="password"
          placeholder="Digite sua senha novamente"
          error={errors.confirmPassword}
          {...register('confirmPassword')}
          passwordInput
        />

        <Button
          buttonType="solid"
          variant="primary"
          text="Cadastrar"
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        />
      </form>

      <Link to="/">Login</Link>
    </Container>
  );
};
