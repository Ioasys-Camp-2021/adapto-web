import React from 'react';

import { Container, Icon, IconImage, Title, Content } from './styles';

type DifferentialItemData = {
  differential: {
    id: number;
    iconName: string;
    title: string;
    content: string;
  };
};

export const DifferentialsItem: React.FC<DifferentialItemData> = ({
  differential: { iconName, title, content },
}) => (
  <Container>
    <Icon>
      <IconImage src={iconName} />
    </Icon>

    <Title>{title}</Title>

    <Content>{content}</Content>
  </Container>
);
