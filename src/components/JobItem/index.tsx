import React from 'react';

import {
  Container,
  Details,
  BusinessLink,
  BusinessLogo,
  DetailContainer,
  Title,
  Description,
  JobLink,
  JobIcon,
} from './styles';

export const JobItem: React.FC = () => (
  <Container>
    <Details>
      <BusinessLink to="/">
        <BusinessLogo />
      </BusinessLink>

      <DetailContainer>
        <Title>Analista de sistemas</Title>
        <Description>CLT</Description>
      </DetailContainer>
    </Details>

    <JobLink to="/">
      <JobIcon />
    </JobLink>
  </Container>
);
