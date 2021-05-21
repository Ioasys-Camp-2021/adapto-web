import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

import { Container } from './styles';

import { useAuth } from '../../contexts/auth';

export const Home: React.FC = () => {
  const { signOut, user } = useAuth();

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch (err) {
      alert('Falha ao realizar logout.');
    }
  }, [signOut]);

  return (
    <Container>
      <Helmet>
        <title>Home | Adapto</title>
        <meta
          name="description"
          content="Descrição padrão para essa tela para melhorar a indexação da página nos crawlers."
        />
      </Helmet>

      <h1>Hello, {user.email}</h1>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </Container>
  );
};
