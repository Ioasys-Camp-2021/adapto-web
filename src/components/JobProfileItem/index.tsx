import React from 'react';

import { JobContainer, JobTitle, JobText } from './styles';

type JobProps = {
  jobTitle: string;
  jobType: string;
};

export const JobProfileItem: React.FC<JobProps> = ({ jobTitle, jobType }) => (
  <JobContainer>
    <JobTitle>{jobTitle}</JobTitle>
    <JobText>{jobType}</JobText>
  </JobContainer>
);
