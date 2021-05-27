import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #ffe6ce 0%, #f3f3f3 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 352px;
  font-size: 4rem;
  font-weight: 600;
  color: var(--caramel-800);
  line-height: 4.5rem;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.span`
  font-size: 1.875rem;
  font-weight: 300;
  color: var(--caramel-800);
  margin-bottom: 2rem;
`;

export const JobsLink = styled(Link)`
  width: 200px;
  height: 58px;
  border-radius: 1rem;
  background-color: var(--caramel-400);
  box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.25);

  font-size: 1.2rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid var(--caramel-800);
  }
`;

export const DifferentialsSection = styled.section`
  width: 100%;
  position: relative;
  background-color: #f3f3f3;
`;

export const DotsLeft = styled.img`
  position: absolute;
  pointer-events: none;
  top: 4rem;
  left: 0;
`;

export const DotsRight = styled.img`
  position: absolute;
  pointer-events: none;
  bottom: -6rem;
  right: 0;
  z-index: 10;
`;

export const SectionContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 4rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 1rem;
`;

export const FooterSection = styled.section`
  width: 100%;
  background-color: #f3f3f3;
  background: linear-gradient(180deg, #f3f3f3 0%, #ffe6ce 100%);
`;

export const FooterContainer = styled(Container)`
  padding-top: 5rem;
  align-items: center;
  justify-content: center;
`;

export const FooterCard = styled.div`
  width: 736px;
  height: 215px;
  position: relative;
  z-index: 50;
  background: #f3f3f3;
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 8px;
  margin-top: -1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
`;

export const FooterCardImage = styled.img`
  pointer-events: none;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  width: 5rem;
  height: 5rem;
`;

export const FooterCardText = styled.h4`
  color: var(--caramel-800);
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;

export const FooterCardAuthor = styled.span`
  position: absolute;
  right: 4rem;
  bottom: 1.5rem;

  color: #bbbbbb;
  font-size: 1.6rem;
`;

export const FooterCardBottom = styled.div`
  width: 672px;
  height: 20px;
  background: #f3f3f3;
  box-shadow: 0px 18px 52.8537px #c4c4c4;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Footer = styled.footer`
  padding: 2rem 0;
`;
