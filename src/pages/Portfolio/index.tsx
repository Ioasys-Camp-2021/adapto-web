import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import {
  Wrapper,
  Container,
  Header,
  Title,
  ErrorContainer,
  ErrorMessage,
  FooterSection,
  FooterContainer,
} from './styles';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { api } from '../../services/api';
import { PortfolioItem } from '../../components/PortfolioItem';

type User = {
  id: number;
  userId: number;
  title: string;
  bio: string;
  location: string;
  languages: string;
  contact: string;
  job_modality: string;
  work_experiences: string;
  website: string;
  linkedin: string;
  facebook: string;
  instagram: string;
};

export const Portfolio: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  const loadUsers = async () => {
    try {
      const response = await api.get('/refugee');

      if (response.data.data) {
        setError('');
        setUsers(response.data.data);
      } else {
        setError('Nenhum portifólio foi cadastrado no sistema.');
      }
    } catch (err) {
      setError('Não foi possível carregar o portifólio dos refugiados.');
      toast.error('Falha ao carregar os refugiados.');
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Wrapper>
      <Navbar />

      <Header>
        <Title>
          Portifólio dos
          <br />
          refugiados
        </Title>
      </Header>

      {error ? (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      ) : (
        <Container>
          {users.map((user) => (
            <PortfolioItem user={user} key={user.id} />
          ))}
        </Container>
      )}

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>
    </Wrapper>
  );
};
