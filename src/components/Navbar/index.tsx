import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Nav,
  NavContainer,
  NavLeft,
  NavRight,
  Logo,
  NavLink,
  LoginButton,
  SignOutButton,
  SearchIcon,
} from './styles';

import { useAuth } from '../../contexts/auth';

import adaptoLogo from '../../assets/images/adapto-logo.svg';
import searchIcon from '../../assets/icons/search.svg';

type NavbarProps = {
  solid?: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({ solid = false }) => {
  const { signOut, user } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  const handleChangeBackgroundColor = () => {
    if (window.scrollY <= 0) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };

  window.addEventListener('scroll', handleChangeBackgroundColor);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();

      toast.success('Logout realizado com sucesso.');
    } catch (err) {
      toast.error('Falha ao realizar logout.');
    }
  }, [signOut]);

  return (
    <Nav scrolled={scrolled || solid}>
      <NavContainer>
        <NavLeft>
          <Link to="/">
            <Logo src={adaptoLogo} alt="Adapto e Incluso" />
          </Link>

          <NavLink to="/about">Sobre nós</NavLink>
          <NavLink to="/">Portfólio</NavLink>
          <NavLink to="/jobs">Vagas</NavLink>
        </NavLeft>

        <NavRight>
          <SearchIcon src={searchIcon} />
          {user ? (
            <>
              <NavLink to={`/${user?.role}/profile/${user?.id}`}>
                Meu perfil
              </NavLink>
              <SignOutButton onClick={handleSignOut}>Sair</SignOutButton>
            </>
          ) : (
            <>
              <NavLink to="/register">Criar conta</NavLink>
              <LoginButton to="/login">Entrar</LoginButton>
            </>
          )}
        </NavRight>
      </NavContainer>
    </Nav>
  );
};
