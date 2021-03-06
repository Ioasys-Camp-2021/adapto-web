import React, { useCallback, useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Helmet } from 'react-helmet-async';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import {
  Wrapper,
  Container,
  BackgroundImage,
  HeaderContainer,
  ProfileContainer,
  ProfileImage,
  ProfileDetails,
  NameContainer,
  Name,
  EditInfoButton,
  EditIcon,
  Function,
  TabsContainer,
  TabItem,
  TabContent,
  InputContainer,
  Input,
  ChatBubble,
  Mail,
  Work,
  LocationOn,
  Textarea,
  DataContainer,
  RowData,
  DataTitle,
  BigText,
  DataText,
  AddJob,
  AddJobIcon,
  AddJobText,
  SaveContainer,
  FooterSection,
  FooterContainer,
  SocialMediaLink,
  SocialMediaLogo,
  SocialMediaContainer,
  ErrorContainer,
  ErrorMessage,
  NoPhoto,
  ProjectsContainer,
  DeleteButton,
  DeleteIcon,
  ContentContainer,
} from './styles';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { ProfileModal } from '../../components/ProfileModal';
import { useAuth } from '../../contexts/auth';

import linkedinIcon from '../../assets/icons/linkedinCaramel.svg';
import instagramIcon from '../../assets/icons/instagramCaramel.svg';
import facebookIcon from '../../assets/icons/facebookCaramel.svg';
import websiteIcon from '../../assets/icons/webCaramel.svg';
import { WorkItem } from '../../components/WorkItem';

type UserFormData = {
  fullName: string;
  title: string;

  bio: string;
  location: string;
  languages: string;
  jobModality: string;
  contact: string;

  workExperience: string;

  linkedin: string;
  instagram: string;
  facebook: string;
  website: string;
};

type ParamsProps = {
  id: string;
};

type UserData = {
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
  User: {
    firstName: string;
    id: number;
    fullName: string;
    email: string;
  };
};

type WorkParams = {
  id: number;
  refugeeId: number;
  title: string;
  description: string;
  User: {
    id: number;
    fullName: string;
  };
  Category: {
    id: number;
    title: string;
  };
};

const userFormSchema = yup.object().shape({});

export const RefugeeProfile: React.FC = () => {
  const { id } = useParams<ParamsProps>();
  const [showModal, setShowModal] = useState(false);

  const [projects, setProjects] = useState<WorkParams[]>([]);
  const [user, setUser] = useState<UserData>();

  const [error, setError] = useState('');

  const { user: storedUser } = useAuth();

  const [toogleState, setToogleState] = useState(1);
  const [editing, setEditing] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<UserFormData>({
    resolver: yupResolver(userFormSchema),
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const loadProjects = async () => {
    try {
      const response = await api.get('/project');

      if (response.data.data) {
        const userProjects = response.data.data.filter(
          (item: any) => item.User.id === Number(id),
        );

        setProjects(userProjects);
      } else {
        setProjects([]);
      }
    } catch (err) {
      toast.error('Falha ao buscar os projetos do usu??rio.');
    }
  };

  const handleDeleteProject = async (projectId: number) => {
    try {
      await api.delete(`/project/${projectId}`);

      toast.success('Projeto exclu??do com sucesso.');

      loadProjects();
    } catch (err) {
      toast.error('Falha ao excluir esse projeto.');
    }
  };

  const loadUserData = async () => {
    try {
      const response = await api.get(`/refugee/${id}`);

      if (response.data.length === 0) {
        setError('N??o foi poss??vel encontrar esse refugiado.');
        toast.error('Refugiado n??o encontrado.');
      } else {
        setError('');

        const currentUser = response.data[0];
        setUser(currentUser);

        setValue('fullName', currentUser ? currentUser.User.fullName : '');

        setValue('title', currentUser ? currentUser.title : '');

        setValue('bio', currentUser ? currentUser.bio : '');
        setValue('location', currentUser ? currentUser.location : '');
        setValue('languages', currentUser ? currentUser.languages : '');
        setValue('jobModality', currentUser ? currentUser.job_modality : '');
        setValue('contact', currentUser ? currentUser.contact : '');

        setValue(
          'workExperience',
          currentUser ? currentUser.work_experiences : '',
        );

        setValue('linkedin', currentUser ? currentUser.linkedin : '');
        setValue('instagram', currentUser ? currentUser.instagram : '');
        setValue('facebook', currentUser ? currentUser.facebook : '');
        setValue('website', currentUser ? currentUser.website : '');
      }
    } catch (err) {
      setError('N??o foi poss??vel encontrar esse refugiado.');
      toast.error('Falha ao buscar os dados desse refugiado.');
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    loadProjects();
  }, [showModal]);

  const handleChangeData = useCallback(async (values) => {
    const data = {
      title: values.title ? values.title : '',
      bio: values.bio ? values.bio : '',
      location: values.location ? values.location : '',
      languages: values.languages ? values.languages : '',
      job_modality: values.jobModality ? values.jobModality : '',
      contact: values.contact ? values.contact : '',
      work_experiences: values.workExperience ? values.workExperience : '',
      linkedin: values.linkedin ? values.linkedin : '',
      instagram: values.instagram ? values.instagram : '',
      facebook: values.facebook ? values.facebook : '',
      website: values.website ? values.website : '',
    };

    try {
      await api.put('/refugee', data);

      setEditing(false);

      toast.success('Dados atualizados com sucesso.');

      loadUserData();
    } catch (err) {
      toast.error('Falha ao atualizar os dados. Tente novamente.');
    }
  }, []);

  return (
    <Wrapper>
      <Navbar solid />

      <Helmet>
        <title>Perfil | Adapto</title>
        <meta
          name="description"
          content="Perfil de um refugiado. Entre e conhe??a sobre essa pessoa, suas experi??ncias, trabalhos e maneiras de entrar em contato."
        />
      </Helmet>

      {error ? (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      ) : (
        <>
          <BackgroundImage>
            <Container>
              <HeaderContainer>
                <ProfileContainer>
                  <ProfileImage>
                    <NoPhoto />
                  </ProfileImage>
                  <ProfileDetails>
                    <NameContainer>
                      <Name>{user?.User.fullName}</Name>
                      {!editing && (
                        <>
                          {storedUser?.id === Number(id) && (
                            <EditInfoButton
                              type="button"
                              onClick={() => setEditing(true)}
                            >
                              <EditIcon />
                            </EditInfoButton>
                          )}
                        </>
                      )}
                    </NameContainer>
                    {editing ? (
                      <InputContainer>
                        <Input
                          type="text"
                          placeholder="T??tulo"
                          disabled={!editing}
                          {...register('title')}
                        />
                      </InputContainer>
                    ) : (
                      <Function>
                        {user?.title ? user?.title : 'Sem descri????o'}
                      </Function>
                    )}
                  </ProfileDetails>
                </ProfileContainer>

                <TabsContainer>
                  <TabItem
                    active={toogleState === 1}
                    onClick={() => setToogleState(1)}
                  >
                    Sobre
                  </TabItem>
                  <TabItem
                    active={toogleState === 2}
                    onClick={() => setToogleState(2)}
                  >
                    Experi??ncia profissional
                  </TabItem>
                  <TabItem
                    active={toogleState === 3}
                    onClick={() => setToogleState(3)}
                  >
                    Trabalhos
                  </TabItem>
                  <TabItem
                    active={toogleState === 4}
                    onClick={() => setToogleState(4)}
                  >
                    Redes Sociais
                  </TabItem>
                </TabsContainer>
              </HeaderContainer>
            </Container>
          </BackgroundImage>

          <ContentContainer>
            <TabContent active={toogleState === 1}>
              {editing ? (
                <form>
                  <Textarea
                    placeholder="Escreva algo sobre voc??"
                    disabled={!editing}
                    rows={6}
                    {...register('bio')}
                  />

                  <InputContainer>
                    <LocationOn />
                    <Input
                      type="text"
                      placeholder="Cidade e estado"
                      disabled={!editing}
                      {...register('location')}
                    />
                  </InputContainer>

                  <InputContainer>
                    <ChatBubble />
                    <Input
                      type="text"
                      placeholder="Idiomas"
                      disabled={!editing}
                      {...register('languages')}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Work />
                    <Input
                      type="text"
                      placeholder="Modalidade de trabalho"
                      disabled={!editing}
                      {...register('jobModality')}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Mail />
                    <Input
                      type="email"
                      placeholder="Contato"
                      disabled={!editing}
                      {...register('contact')}
                    />
                  </InputContainer>
                </form>
              ) : (
                <DataContainer>
                  <DataTitle>SOBRE</DataTitle>
                  <BigText style={{ marginBottom: '1.5rem' }}>
                    {user?.bio ? user?.bio : 'Sem dados cadastrados'}
                  </BigText>

                  <RowData>
                    <LocationOn />{' '}
                    <DataText>
                      {user?.location ? user?.location : 'Sem dados'}
                    </DataText>
                  </RowData>

                  <RowData>
                    <ChatBubble />{' '}
                    <DataText>
                      {user?.languages ? user?.languages : 'Sem dados'}
                    </DataText>
                  </RowData>

                  <RowData>
                    <Work />{' '}
                    <DataText>
                      {user?.job_modality ? user?.job_modality : 'Sem dados'}
                    </DataText>
                  </RowData>

                  <RowData>
                    <Mail />{' '}
                    <DataText>
                      {user?.contact ? user?.contact : 'Sem dados'}
                    </DataText>
                  </RowData>
                </DataContainer>
              )}
            </TabContent>

            <TabContent active={toogleState === 2}>
              {editing ? (
                <Textarea
                  placeholder="Descreva aqui sua experi??ncia profissional"
                  disabled={!editing}
                  rows={6}
                  {...register('workExperience')}
                />
              ) : (
                <DataContainer>
                  <DataTitle>Experi??ncia profissional</DataTitle>
                  <BigText>
                    {user?.work_experiences
                      ? user?.work_experiences
                      : 'Sem dados cadastrados'}
                  </BigText>
                </DataContainer>
              )}
            </TabContent>

            <TabContent active={toogleState === 3}>
              <ProjectsContainer>
                {storedUser?.id === Number(id) && (
                  <AddJob onClick={toggleModal}>
                    <AddJobIcon />
                    <AddJobText>Adicionar um trabalho</AddJobText>
                  </AddJob>
                )}

                {projects.map((project) => (
                  <WorkItem key={project.id} work={project}>
                    {storedUser?.id === Number(id) && (
                      <DeleteButton
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <DeleteIcon />
                      </DeleteButton>
                    )}
                  </WorkItem>
                ))}
              </ProjectsContainer>
            </TabContent>

            <TabContent active={toogleState === 4}>
              {editing ? (
                <form>
                  <InputContainer>
                    <SocialMediaLogo src={linkedinIcon} alt="LinkedIn" />
                    <Input
                      type="text"
                      placeholder="LinkedIn"
                      disabled={!editing}
                      {...register('linkedin')}
                    />
                  </InputContainer>

                  <InputContainer>
                    <SocialMediaLogo src={instagramIcon} alt="Instagram" />
                    <Input
                      type="text"
                      placeholder="Instagram"
                      disabled={!editing}
                      {...register('instagram')}
                    />
                  </InputContainer>

                  <InputContainer>
                    <SocialMediaLogo src={facebookIcon} alt="Facebook" />
                    <Input
                      type="text"
                      placeholder="Facebook"
                      disabled={!editing}
                      {...register('facebook')}
                    />
                  </InputContainer>

                  <InputContainer>
                    <SocialMediaLogo src={websiteIcon} alt="Website" />
                    <Input
                      type="text"
                      placeholder="Website"
                      disabled={!editing}
                      {...register('website')}
                    />
                  </InputContainer>
                </form>
              ) : (
                <SocialMediaContainer>
                  <SocialMediaLink
                    href={user?.linkedin}
                    target="_blank"
                    style={{
                      borderBottom: 'none',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  >
                    <SocialMediaLogo src={linkedinIcon} alt="LinkedIn" />
                    LinkedIn
                  </SocialMediaLink>

                  <SocialMediaLink
                    href={user?.instagram}
                    target="_blank"
                    style={{ borderBottom: 'none' }}
                  >
                    <SocialMediaLogo src={instagramIcon} alt="Instagram" />
                    Instagram
                  </SocialMediaLink>

                  <SocialMediaLink
                    href={user?.facebook}
                    target="_blank"
                    style={{
                      borderBottom: 'none',
                    }}
                  >
                    <SocialMediaLogo src={facebookIcon} alt="Facebook" />
                    Facebook
                  </SocialMediaLink>

                  <SocialMediaLink
                    href={user?.facebook}
                    target="_blank"
                    style={{
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                    }}
                  >
                    <SocialMediaLogo src={websiteIcon} alt="Website" />
                    Website
                  </SocialMediaLink>
                </SocialMediaContainer>
              )}
            </TabContent>

            {editing && toogleState !== 3 && (
              <SaveContainer>
                <Button
                  buttonType="outline"
                  variant="primary"
                  text="Cancelar"
                  type="button"
                  style={{ width: '200px' }}
                  onClick={() => {
                    loadUserData();
                    setEditing(false);
                  }}
                />
                <Button
                  buttonType="solid"
                  variant="primary"
                  text="Salvar"
                  type="submit"
                  onClick={handleSubmit(handleChangeData)}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  style={{ width: '200px', marginLeft: '1rem' }}
                />
              </SaveContainer>
            )}
          </ContentContainer>
        </>
      )}

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>

      <ProfileModal modalIsOpen={showModal} toggleModalFunction={toggleModal} />
    </Wrapper>
  );
};
