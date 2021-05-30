import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

import { toast } from 'react-toastify';
import { Container } from './styles';

import { Navbar } from '../../components/Navbar';

import { useAuth } from '../../contexts/auth';

export const App: React.FC = () => {
  const { signOut, user } = useAuth();

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch (err) {
      toast.error('Falha ao realizar logout.');
    }
  }, [signOut]);

  return (
    <>
      <Navbar />
      <Container>
        <Helmet>
          <title>App | Adapto</title>
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
    </>
  );
};
