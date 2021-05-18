import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Container } from './styles';

export const Home: React.FC = () => (
  <Container>
    <Helmet>
      <title>Home | Adapto</title>
      <meta
        name="description"
        content="A melhor plataforma para visualizar informações sobre livros. Entre agora e descubra novas indicações de literaturas para você!"
      />
    </Helmet>

    <h1>Home</h1>
  </Container>
);
