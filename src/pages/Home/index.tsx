import React from 'react';

import {
  Wrapper,
  Header,
  Container,
  Title,
  Subtitle,
  JobsLink,
  DifferentialsSection,
  DotsLeft,
  DotsRight,
  SectionContainer,
  SectionTitle,
  GridContainer,
  FooterSection,
  FooterContainer,
  FooterCard,
  FooterCardImage,
  FooterCardText,
  FooterCardAuthor,
  FooterCardBottom,
  Footer,
} from './styles';

import { Navbar } from '../../components/Navbar';
import { DifferentialsItem } from '../../components/DifferentialsItem';

import dotsLeft from '../../assets/images/dots-left.svg';
import dotsRight from '../../assets/images/dots-right.svg';
import quotesImg from '../../assets/icons/quotes.svg';

export const Home: React.FC = () => {
  const differentials = [
    {
      id: 0,
      iconName: 'chat.svg',
      title: 'Diversidade',
      content:
        'Tenha a opção de incluir a diversidade no seu negócio. Um troca de ensino e apredizagem',
    },
    {
      id: 1,
      iconName: 'success.svg',
      title: 'Inclusão',
      content:
        'Uma oportunidade para aqueles que são na maioria das vezes desfavorecidos socialmente',
    },
    {
      id: 2,
      iconName: 'hands.svg',
      title: 'Independência',
      content:
        'Preste serviços de acordo com a sua área de conhecimento de forma autônoma',
    },
  ];

  return (
    <Wrapper>
      <Navbar />

      <Header>
        <Container>
          <Title>Apoie a diversidade</Title>
          <Subtitle>e invista na inclusão!</Subtitle>
          <JobsLink to="/">Ver trabalhos</JobsLink>
        </Container>
      </Header>

      <DifferentialsSection>
        <DotsLeft src={dotsLeft} />
        <DotsRight src={dotsRight} />

        <SectionContainer>
          <SectionTitle>Diferenciais</SectionTitle>

          <GridContainer>
            {differentials.map((item) => (
              <DifferentialsItem key={String(item.id)} differential={item} />
            ))}
          </GridContainer>
        </SectionContainer>
      </DifferentialsSection>

      <DifferentialsSection>
        <SectionContainer>
          <SectionTitle>Exposição de Trabalhos</SectionTitle>
        </SectionContainer>
      </DifferentialsSection>

      <DifferentialsSection>
        <SectionContainer>
          <SectionTitle>Integração com o mercado de trabalho</SectionTitle>
        </SectionContainer>
      </DifferentialsSection>

      <FooterSection>
        <FooterContainer>
          <SectionTitle>Divulgue essa causa!</SectionTitle>

          <FooterCard>
            <FooterCardImage src={quotesImg} />
            <FooterCardText>
              O trabalho pode mudar o destino de uma família.
            </FooterCardText>
            <FooterCardAuthor>Stela</FooterCardAuthor>
          </FooterCard>
          <FooterCardBottom />

          <Footer />
        </FooterContainer>
      </FooterSection>
    </Wrapper>
  );
};
