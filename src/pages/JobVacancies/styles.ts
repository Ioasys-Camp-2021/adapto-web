import styled from 'styled-components';

import headerImage from '../../assets/images/jobs.png';

export const Wrapper = styled.div`
  background-color: #f3f3f3;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 100vh;

  background-image: url(${headerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: var(--blue-800);
  font-weight: 600;
  font-size: 4rem;
  text-align: center;
  line-height: 5rem;
`;

export const FooterSection = styled.div`
  margin-top: -9rem;
  background: linear-gradient(180deg, #f3f3f3 0%, #ffe6ce 100%);
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;
