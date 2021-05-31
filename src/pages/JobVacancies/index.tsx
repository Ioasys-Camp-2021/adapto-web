import React from 'react';

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
import { JobItem } from '../../components/JobItem';

export const JobVacancies: React.FC = () => (
  <Wrapper>
    <Navbar />

    <Header>
      <Title>
        Vagas para
        <br />
        refugiados
      </Title>
    </Header>

    <Container>
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </Container>

    <FooterSection>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </FooterSection>
  </Wrapper>
);
