import React from 'react';

import {
  FooterWrapper,
  FooterItemWrapper,
  FooterImage,
  FooterContent,
  FooterCopyright,
  FooterTitle,
  FooterLink,
  FooterText,
  SocialMediaLink,
} from './styles';

import linkedinImg from '../../assets/icons/linkedin.svg';
import instagramImg from '../../assets/icons/instagram.svg';
import facebookImg from '../../assets/icons/facebook.svg';

import adaptoLogo from '../../assets/images/adapto-logo.svg';

export const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterItemWrapper>
      <FooterImage src={adaptoLogo} />

      <FooterContent>
        Uma ação voluntária que ajuda refugiados e imigrantes.
      </FooterContent>

      <FooterCopyright>© Copyright Adapto</FooterCopyright>
    </FooterItemWrapper>

    <FooterItemWrapper>
      <FooterTitle>Feature</FooterTitle>

      <FooterLink to="/">Home</FooterLink>
      <FooterLink to="/about">Sobre nós</FooterLink>
      <FooterLink to="/portfolio">Portifólio</FooterLink>
      <FooterLink to="/jobs">Vagas</FooterLink>
      <FooterLink to="/register">Criar conta</FooterLink>
      <FooterLink to="/login">Entrar</FooterLink>
    </FooterItemWrapper>

    <FooterItemWrapper>
      <FooterTitle>Contato</FooterTitle>

      <FooterText>contato@adapto.com</FooterText>
      <FooterText>+55 0000-0000</FooterText>
    </FooterItemWrapper>

    <FooterItemWrapper>
      <FooterTitle>Nossas redes sociais</FooterTitle>

      <SocialMediaLink href="https://www.linkedin.com/feed/" target="_blank">
        <img src={linkedinImg} alt="LinkedIn" />
        adapto-e-incluso
      </SocialMediaLink>

      <SocialMediaLink href="https://www.instagram.com/" target="_blank">
        <img src={instagramImg} alt="Instagram" />
        @adaptoeincluso
      </SocialMediaLink>

      <SocialMediaLink href="https://www.facebook.com/" target="_blank">
        <img src={facebookImg} alt="Facebook" />
        @adaptoeincluso
      </SocialMediaLink>
    </FooterItemWrapper>
  </FooterWrapper>
);
