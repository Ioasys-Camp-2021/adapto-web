import React from 'react';

import { Nav, NavContainer, NavLeft, NavRight, Logo, NavLink } from './styles';

import adaptoLogo from '../../assets/images/adapto-logo.svg';

export const Navbar: React.FC = () => (
  <Nav>
    <NavContainer>
      <NavLeft>
        <Logo src={adaptoLogo} alt="Adapto e Incluso" />
        <NavLink to="/">Sobre nós</NavLink>
        <NavLink to="/">Refugiados</NavLink>
        <NavLink to="/">Para Empresas</NavLink>
      </NavLeft>

      <NavRight />
    </NavContainer>
  </Nav>
);
