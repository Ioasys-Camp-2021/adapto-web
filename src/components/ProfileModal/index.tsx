import React, { useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container, ModalCloseButton, ModalContent } from './styles';
import { api } from '../../services/api';

type JobFormData = {
  job: string;
  category: string;
};

const jobFormSchema = yup.object().shape({
  job: yup.string().required('Título do trabalho é um campo obrigatório'),
  category: yup.string().required('Categoria é um campo obrigatório'),
});

type ModalProps = {
  modalIsOpen: boolean;
  toggleModalFunction: () => void;
};

export const ProfileModal: React.FC<ModalProps> = ({
  modalIsOpen,
  toggleModalFunction,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobFormData>({
    resolver: yupResolver(jobFormSchema),
  });

  const handleCreateNewJob = useCallback(async (values) => {
    try {
      await api.post('/auth/reset-password', {
        email1: values.email,
        email2: values.email,
      });

      toast.success('Email de recuperação de senha enviado com sucesso.');

      toggleModalFunction();
    } catch (err) {
      const { status } = err.response;

      if (status === 422) {
        toast.error('Falha ao enviar email de recuperação de senha.');
        return;
      }

      toast.error('Erro interno de servidor.');
    }
  }, []);

  useEffect(() => {
    reset();
  }, [modalIsOpen]);

  return (
    <Container modalIsOpen={modalIsOpen}>
      <ModalContent>
        <ModalCloseButton type="button" onClick={toggleModalFunction} />

        <form onSubmit={handleSubmit(handleCreateNewJob)}>
          <Input
            type="text"
            placeholder="Título do trabalho"
            error={errors.job}
            {...register('job')}
          />
          <Input
            type="text"
            placeholder="Categoria"
            error={errors.category}
            {...register('category')}
          />
          <Button
            buttonType="solid"
            variant="primary"
            text="Salvar"
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          />
        </form>
      </ModalContent>
    </Container>
  );
};
