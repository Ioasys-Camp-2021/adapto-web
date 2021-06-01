import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import {
  Wrapper,
  Container,
  Header,
  Title,
  FooterSection,
  FooterContainer,
} from './styles';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { api } from '../../services/api';

type Users = {};

export const Portfolio: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);

  console.log(users);

  const loadUsers = async () => {
    try {
      const response = await api.get('/refugee');

      setUsers(response.data.data);
    } catch (err) {
      console.log(err);
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

      <Container />

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>
    </Wrapper>
  );
};
