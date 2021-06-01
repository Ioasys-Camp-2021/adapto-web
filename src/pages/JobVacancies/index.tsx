import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import {
  Wrapper,
  Container,
  Header,
  Title,
  FooterSection,
  FooterContainer,
} from './styles';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { JobItem } from '../../components/JobItem';
import { api } from '../../services/api';
import { JobModal } from '../../components/JobModal';

type Jobs = {
  id: number;
  userId: number;
  enterpriseId: number;
  categoryId: number;
  title: string;
  description: string;
  jobModality: string;
  User: {
    fullName: string;
  };
  Category: {
    title: string;
  };
};

export const JobVacancies: React.FC = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [selectedJob, setSelectedJob] = useState<Jobs>();
  const [showModal, setShowModal] = useState(false);

  const loadJobs = async () => {
    try {
      const response = await api.get('/job');

      if (response.data.data) {
        setJobs(response.data.data);
      }
    } catch (err) {
      console.log(err);
      toast.error('Falha ao carregar as vagas cadastradas.');
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectJob = (job: Jobs) => {
    setSelectedJob(job);
  };

  return (
    <Wrapper>
      <Navbar />

      <Header>
        <Title>
          Vagas para
          <br />
          refugiados
        </Title>
      </Header>

      <Container>
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            toogleModal={handleShowModal}
            selectJob={handleSelectJob}
          />
        ))}
      </Container>

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>

      <JobModal
        modalIsOpen={showModal}
        toggleModalFunction={handleShowModal}
        job={selectedJob}
      />
    </Wrapper>
  );
};
