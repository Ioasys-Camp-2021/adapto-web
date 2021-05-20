import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Container } from './styles';

import { useAuth } from '../../contexts/auth';

export const Home: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Helmet>
        <title>Home | Adapto</title>
        <meta
          name="description"
          content="A melhor plataforma para visualizar informações sobre livros. Entre agora e descubra novas indicações de literaturas para você!"
        />
      </Helmet>

      <h1>Home</h1>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
    </Container>
  );
};
