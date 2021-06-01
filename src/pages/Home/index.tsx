import React from 'react';

import { Helmet } from 'react-helmet-async';
import {
  Wrapper,
  Header,
  Container,
  Title,
  Subtitle,
  JobsLink,
  BackgroundImage,
  DifferentialsSection,
  DotsLeft,
  DotsRight,
  SectionContainer,
  SectionTitle,
  GridContainer,
  LaborMarketSection,
  LaborMarketContainer,
  LaborMarketImage,
  SectionWrapper,
  SectionContent,
  ButtonsContainer,
  LaborMarketSolidButton,
  LaborMarketOutlineButton,
  FooterSection,
  FooterContainer,
  FooterCard,
  FooterCardImage,
  FooterCardText,
  FooterCardAuthor,
  FooterCardBottom,
} from './styles';

import { Navbar } from '../../components/Navbar';
import { DifferentialsItem } from '../../components/DifferentialsItem';

import { Footer } from '../../components/Footer';

import homeImg from '../../assets/images/home.png';

import dotsLeft from '../../assets/images/dots-left.svg';
import dotsRight from '../../assets/images/dots-right.svg';

import quotesImg from '../../assets/icons/quotes.svg';

import laborMarketImg from '../../assets/images/labor-market.svg';

export const Home: React.FC = () => {
  const differentials = [
    {
      id: 0,
      iconName: 'chat',
      title: 'Diversidade',
      content:
        'Tenha a opção de incluir a diversidade no seu negócio. Um troca de ensino e apredizagem',
    },
    {
      id: 1,
      iconName: 'success',
      title: 'Inclusão',
      content:
        'Uma oportunidade para aqueles que são na maioria das vezes desfavorecidos socialmente',
    },
    {
      id: 2,
      iconName: 'hands',
      title: 'Independência',
      content:
        'Preste serviços de acordo com a sua área de conhecimento de forma autônoma',
    },
  ];

  return (
    <Wrapper>
      <Helmet>
        <title>Home | Adapto</title>
        <meta
          name="description"
          content="Bem-vindo à Adapto, sua plataforma para conectar refugiados e empresas."
        />
      </Helmet>
      <Navbar />

      <Header>
        <Container>
          <Title>Apoie a diversidade</Title>
          <Subtitle>e invista na inclusão!</Subtitle>
          <JobsLink to="/portfolio">Ver trabalhos</JobsLink>
        </Container>

        <BackgroundImage src={homeImg} alt="Adapto e Incluso" />
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

      <LaborMarketSection>
        <LaborMarketContainer>
          <LaborMarketImage
            src={laborMarketImg}
            alt="Integração com o mercado de trabalho"
          />
          <SectionWrapper>
            <SectionTitle>Integração com o mercado de trabalho</SectionTitle>

            <SectionContent>
              O Adapto é uma ação voluntária criada no intuito de ajudar aqueles
              que são negligenciados socialmente. Por meio de nossa plataforma é
              possível dar os primeiros passos para a vida profissional. Temos o
              objetivo de descomplicar a inserção dessas pessoas no mercado de
              trabalho, seja no modo CLT ou de forma autônoma.
            </SectionContent>

            <ButtonsContainer>
              <LaborMarketSolidButton to="/jobs">
                Ver vagas
              </LaborMarketSolidButton>
              <LaborMarketOutlineButton to="/portfolio">
                Ver trabalhos
              </LaborMarketOutlineButton>
            </ButtonsContainer>
          </SectionWrapper>
        </LaborMarketContainer>
      </LaborMarketSection>

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
