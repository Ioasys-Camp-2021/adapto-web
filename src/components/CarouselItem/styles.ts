import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 255px;
  height: 448px;
  box-shadow: 0px 5px 15px -35px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;

  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.25));
`;

export const CardFooter = styled.div`
  position: absolute;
  width: 100%;
  height: 110px;
  backdrop-filter: blur(2px);
  bottom: 0;

  padding: 0 1.5rem;

  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(254, 254, 254, 0.5);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const CardTitle = styled.h3`
  position: relative;
  font-weight: 500;
  font-size: 1.8rem;
  color: #4e4e4e;
`;
