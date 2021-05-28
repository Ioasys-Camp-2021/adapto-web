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

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 352px;
  font-size: 4rem;
  font-weight: 600;
  color: var(--caramel-800);
  line-height: 4.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    width: auto;
    max-width: auto;
    font-size: 3rem;
    line-height: 3.5rem;
  }

  @media (max-width: 350px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 1.875rem;
  font-weight: 300;
  color: var(--caramel-800);
  margin-bottom: 2rem;

  @media (max-width: 350px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const JobsLink = styled(Link)`
  width: 200px;
  height: 56px;
  border-radius: 1rem;
  background-color: var(--caramel-400);

  box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.25);

  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid var(--caramel-800);
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  height: 94%;
  right: 1rem;
  bottom: -3rem;
  z-index: 10;

  @media (max-width: 1070px) {
    display: none;
  }
`;

export const DifferentialsSection = styled.section`
  width: 100%;
  position: relative;
  background-color: #f3f3f3;
  padding-top: 5rem;
`;

export const DotsLeft = styled.img`
  position: absolute;
  pointer-events: none;
  top: 4rem;
  left: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const DotsRight = styled.img`
  position: absolute;
  pointer-events: none;
  bottom: -6rem;
  right: 0;
  z-index: 10;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const SectionContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  padding: 6rem 0;

  @media (max-width: 1120px) {
    padding: 6rem 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 4rem;
  line-height: 3rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 1rem;

  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    row-gap: 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CarouselSection = styled.section`
  width: 100%;
  background-color: #f3f3f3;
`;

export const CarouselWrapper = styled.div`
  margin-top: -1.4rem;
  display: flex;
  flex-direction: row;
`;

export const LaborMarketSection = styled.section`
  width: 100%;
  background-color: #f3f3f3;
`;

export const LaborMarketContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 6rem 0;

  h2 {
    width: 100%;
    max-width: 416px;
  }

  @media (max-width: 1120px) {
    padding: 6rem 2rem;

    h2 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 840px) {
    flex-direction: column;

    h2 {
      margin-top: 2rem;
      font-size: 2.4rem;
      line-height: 3rem;
      width: 100%;
      max-width: 416px;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-left: 2rem;

  @media (max-width: 840px) {
    margin-left: 0;
  }
`;

export const SectionContent = styled.p`
  font-size: 1.4rem;
  margin-top: -2.5rem;
  margin-bottom: 2rem;
`;

export const LaborMarketImage = styled.img`
  @media (max-width: 1120px) {
    width: 50%;
  }

  @media (max-width: 840px) {
    width: 60%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LaborMarketSolidButton = styled(Link)`
  width: 200px;
  height: 56px;
  border-radius: 1rem;
  background-color: var(--caramel-400);
  box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.25);

  font-size: 1.1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 3rem;

  &:focus {
    border: 1px solid var(--caramel-800);
  }

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

export const LaborMarketOutlineButton = styled(Link)`
  width: 200px;
  height: 56px;
  border-radius: 1rem;
  background-color: transparent;

  font-size: 1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--caramel-800);

  color: var(--caramel-800);

  &:focus {
    border: 1px solid var(--caramel-800);
  }

  @media (max-width: 1200px) {
    margin-top: 1rem;
  }
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
  width: 100%;
  max-width: 736px;
  height: 215px;
  position: relative;
  z-index: 50;
  background: #f3f3f3;
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 8px;
  margin-top: -1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 3rem;

  @media (max-width: 540px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (max-width: 440px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const FooterCardAuthor = styled.span`
  position: absolute;
  right: 4rem;
  bottom: 1.5rem;

  color: #bbbbbb;
  font-size: 1.6rem;

  @media (max-width: 560px) {
    right: 1.5rem;
    font-size: 1.4rem;
  }
`;

export const FooterCardBottom = styled.div`
  width: 100%;
  max-width: 672px;
  height: 20px;
  background: #f3f3f3;
  box-shadow: 0px 18px 52.8537px #c4c4c4;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (max-width: 736px) {
    width: 92%;
    max-width: auto;
  }
`;

export const Footer = styled.footer`
  padding: 2.5rem 0;
  margin-top: 10rem;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }
`;

export const FooterItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 840px) {
    align-items: center;
  }
`;

export const FooterTitle = styled.h3`
  font-weight: 600;
  color: var(--blue-800);
  margin-bottom: 1rem;
  margin-top: 1.4rem;

  @media (max-width: 840px) {
    align-items: center;
  }
`;

export const FooterLink = styled(Link)`
  margin-bottom: 0.2rem;
  color: #575757;
`;

export const FooterContent = styled.p`
  max-width: 200px;
  color: #575757;
  margin-bottom: 4rem;

  @media (max-width: 840px) {
    width: 400px;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 0.2rem;
  color: #575757;
`;

export const FooterImage = styled.img``;

export const FooterCopyright = styled.span`
  justify-self: flex-end;
`;

export const SocialMediaLink = styled.a`
  margin-bottom: 0.4rem;
  color: #575757;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 0.8rem;
  }
`;
