import React, { useState } from 'react';

import {
  Nav,
  NavContainer,
  NavLeft,
  NavRight,
  Logo,
  NavLink,
  LoginButton,
  SearchIcon,
} from './styles';

import adaptoLogo from '../../assets/images/adapto-logo.svg';
import searchIcon from '../../assets/icons/search.svg';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleChangeBackgroundColor = () => {
    if (window.scrollY <= 78) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };

  window.addEventListener('scroll', handleChangeBackgroundColor);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <NavLeft>
          <Logo src={adaptoLogo} alt="Adapto e Incluso" />
          <NavLink to="/">Sobre nós</NavLink>
          <NavLink to="/">Refugiados</NavLink>
          <NavLink to="/">Para Empresas</NavLink>
        </NavLeft>

        <NavRight>
          <SearchIcon src={searchIcon} />
          <NavLink to="/register">Criar conta</NavLink>
          <LoginButton to="/login">Entrar</LoginButton>
        </NavRight>
      </NavContainer>
    </Nav>
  );
};
