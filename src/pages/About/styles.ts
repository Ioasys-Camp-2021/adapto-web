import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #ffe6ce 0%, #f3f3f3 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8rem 0;
  padding-bottom: 2rem;
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

export const HeaderCard = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 4rem;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const HeaderImage = styled.img`
  width: 440px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const HeaderContainer = styled.div`
  margin-left: 4rem;

  @media (max-width: 980px) {
    margin-left: 0;
    margin-top: 3rem;
  }
`;

export const HeaderTitle = styled.h1`
  color: var(--caramel-800);
  font-weight: 600;
  font-size: 4rem;
  line-height: 4.5rem;

  @media (max-width: 480px) {
    font-size: 3.2rem;
    line-height: 3.4rem;
  }

  @media (max-width: 360px) {
    font-size: 2.6rem;
    line-height: 2.8rem;
  }
`;

export const HeaderText = styled.p`
  font-size: 1.3rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

export const ActionsSection = styled.section`
  width: 100%;
  position: relative;
  background-color: #f3f3f3;
`;

export const SectionContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  padding: 10rem 0;

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

export const DotsLeft = styled.img`
  position: absolute;
  pointer-events: none;
  top: 12rem;
  left: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const FooterSection = styled.div`
  background: linear-gradient(180deg, #f3f3f3 0%, #ffe6ce 100%);
  margin-top: -10rem;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;
