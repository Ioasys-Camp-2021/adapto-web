import React from 'react';

import { Container, CardFooter, CardTitle } from './styles';

import cookingImg from '../../assets/images/cooking.svg';

export const CarouselItem: React.FC = () => (
  <Container to="/" style={{ backgroundImage: `url(${cookingImg})` }}>
    <CardFooter>
      <CardTitle>Culinária</CardTitle>
    </CardFooter>
  </Container>
);
