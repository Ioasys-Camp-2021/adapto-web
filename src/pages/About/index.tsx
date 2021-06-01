import React from 'react';

import { Helmet } from 'react-helmet-async';
import {
  Wrapper,
  Container,
  FooterSection,
  FooterContainer,
  HeaderCard,
  HeaderImage,
  HeaderContainer,
  HeaderTitle,
  HeaderText,
  ActionsSection,
  SectionContainer,
  SectionTitle,
  GridContainer,
} from './styles';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import aboutImg from '../../assets/images/about.svg';
import { DifferentialsItem } from '../../components/DifferentialsItem';

export const About: React.FC = () => {
  const actions = [
    {
      id: 0,
      iconName: 'share',
      title: 'Compartilhe',
      content:
        'Ajude-nos a alcançar mais pessoas que podem se beneficiar dessa causa.',
    },
    {
      id: 1,
      iconName: 'work',
      title: 'Divulgue vagas',
      content:
        'A sua empresa já pode caminhar junto com a diversidade. Divulgue aqui as vagas disponíveis.',
    },
    {
      id: 2,
      iconName: 'chat',
      title: 'Entre em contato',
      content:
        'Gostou de algum dos trabalhos expostos em nossa plaforma? Entre em contato!',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre | Adapto</title>
        <meta
          name="description"
          content="Conheça mais sobre a iniciativa Adapto, seus diferenciais e todo o ambiente que envolve a nossa causa."
        />
      </Helmet>

      <Navbar />

      <Wrapper>
        <Container>
          <HeaderCard>
            <HeaderImage src={aboutImg} alt="Sobre" />

            <HeaderContainer>
              <HeaderTitle>Por mais variedade!</HeaderTitle>

              <HeaderText>
                Acreditamos que todos merecem uma chance e podem mostrar seu
                valor. Por esse motivo criamos o Adapto. Aqui nós temos o
                objetivo de dar visibiliadde para aqueles que são desfavorecidos
                socialmente - em especial refugiados e imigrantes. Por isso,
                todos nós do time trabalhamos de forma voluntária para fazer
                isso acontecer.
              </HeaderText>
            </HeaderContainer>
          </HeaderCard>
        </Container>
      </Wrapper>

      <ActionsSection>
        <SectionContainer>
          <SectionTitle>Diferenciais</SectionTitle>

          <GridContainer>
            {actions.map((item) => (
              <DifferentialsItem key={String(item.id)} differential={item} />
            ))}
          </GridContainer>
        </SectionContainer>
      </ActionsSection>

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>
    </>
  );
};
