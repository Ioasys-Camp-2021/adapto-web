import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArchive, FiCameraOff } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  border: 1px solid #bbbbbb;
  background-color: #fefefe;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-bottom: 1rem;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const BusinessLink = styled(Link)`
  font-size: 0;
  width: 70px;
  height: 70px;
  background-color: #d6d6d6;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BusinessLogo = styled(FiCameraOff)`
  font-size: 1.5rem;
  color: #777777;
`;

export const DetailContainer = styled.div`
  margin-left: 2rem;
`;

export const Title = styled.h2`
  font-weight: 500;
`;

export const Description = styled.span``;

export const JobLink = styled.div`
  padding: 1rem;
  background-color: var(--blue-500);
  border-radius: 50%;
  font-size: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const JobIcon = styled(FiArchive)`
  font-size: 1.5rem;
  color: var(--white);
`;
