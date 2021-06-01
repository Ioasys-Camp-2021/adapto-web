import React from 'react';

import {
  Container,
  DetailContainer,
  ProfileImage,
  NoPhoto,
  Details,
  Name,
  Title,
  Bio,
} from './styles';

type User = {
  id: number;
  userId: number;
  title: string;
  bio: string;
  location: string;
  languages: string;
  contact: string;
  job_modality: string;
  work_experiences: string;
  website: string;
  linkedin: string;
  facebook: string;
  instagram: string;
};

type PorfolioItemProps = {
  user: User;
};

export const PortfolioItem: React.FC<PorfolioItemProps> = ({ user }) => (
  <Container to={`/refugee/profile/${user.userId}`}>
    <DetailContainer>
      <ProfileImage>
        <NoPhoto />
      </ProfileImage>

      <Details>
        <Name>{user.title}</Name>
        <Title>{user.title}</Title>
      </Details>
    </DetailContainer>

    <Bio>{user.bio}</Bio>
  </Container>
);
