import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  height: 78px;
  background-color: #fff;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
