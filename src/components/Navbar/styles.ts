import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav<{ scrolled: boolean }>`
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.scrolled ? '#ffffff' : 'transparent')};
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;

  -webkit-transition: all 0.1s ease-in;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 62px;
  margin-right: 2rem;
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: var(--blue-800);
  margin-right: 2.5rem;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled.img`
  margin-right: 2.5rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const LoginButton = styled(Link)`
  width: 140px;
  height: 48px;
  border-radius: 1rem;
  background-color: transparent;

  color: var(--caramel-800);
  border: 1px solid var(--caramel-800);

  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid var(--caramel-800);
  }

  @media (max-width: 990px) {
    display: none;
  }
`;
