import React, { useCallback, useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  AddJob,
  AddJobIcon,
  AddJobText,
  SaveContainer,
  FooterSection,
  FooterContainer,
} from './styles';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

type UserFormData = {
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

const userFormSchema = yup.object().shape({});

export const RefugeeProfile: React.FC = () => {
  const { id } = useParams<ParamsProps>();
  const [user, setUser] = useState<UserData>();

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

  const loadUserData = async () => {
    try {
      const response = await api.get(`/refugee/${id}`);

      if (response.data.length === 0) {
        toast.error('Refugiado não encontrado.');
      } else {
        setUser(response.data[0]);

        setValue('bio', user ? user?.bio : '');
        setValue('location', user ? user?.location : '');
        setValue('languages', user ? user?.languages : '');
        setValue('jobModality', user ? user?.job_modality : '');
        setValue('contact', user ? user?.contact : '');

        setValue('workExperience', user ? user.work_experiences : '');
      }
    } catch (err) {
      console.log(err);
      toast.error('Falha ao buscar os dados desse refugiado.');
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const handleChangeData = useCallback(async (values) => {
    console.log(values);
  }, []);

  return (
    <Wrapper>
      <Navbar solid />

      <BackgroundImage>
        <Container>
          <HeaderContainer>
            <ProfileContainer>
              <ProfileImage />
              <ProfileDetails>
                <NameContainer>
                  <Name>{user?.User.fullName}</Name>
                  {!editing && (
                    <EditInfoButton
                      type="button"
                      onClick={() => setEditing(true)}
                    >
                      <EditIcon />
                    </EditInfoButton>
                  )}
                </NameContainer>
                <Function>{user?.title}</Function>
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
                Experiência profissional
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

      <Container style={{ marginTop: '12rem' }}>
        <TabContent active={toogleState === 1}>
          <form onSubmit={handleSubmit(handleChangeData)}>
            <Textarea
              placeholder="Escreva algo sobre você"
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
                type="text"
                placeholder="Contato"
                disabled={!editing}
                {...register('contact')}
              />
            </InputContainer>
          </form>
        </TabContent>

        <TabContent active={toogleState === 2}>
          <Textarea
            placeholder="Descreva aqui sua experiência profissional"
            disabled={!editing}
            rows={6}
            {...register('workExperience')}
          />
        </TabContent>

        <TabContent active={toogleState === 3}>
          <AddJob>
            <AddJobIcon />
            <AddJobText>Adicionar um trabalho</AddJobText>
          </AddJob>
        </TabContent>

        <TabContent active={toogleState === 4}>
          <form onSubmit={handleSubmit(handleChangeData)}>
            <InputContainer>
              <Mail />
              <Input
                type="text"
                placeholder="LinkedIn"
                disabled={!editing}
                {...register('linkedin')}
              />
            </InputContainer>

            <InputContainer>
              <Mail />
              <Input
                type="text"
                placeholder="Instagram"
                disabled={!editing}
                {...register('instagram')}
              />
            </InputContainer>

            <InputContainer>
              <Mail />
              <Input
                type="text"
                placeholder="Facebook"
                disabled={!editing}
                {...register('facebook')}
              />
            </InputContainer>

            <InputContainer>
              <Mail />
              <Input
                type="text"
                placeholder="Website"
                disabled={!editing}
                {...register('website')}
              />
            </InputContainer>
          </form>
        </TabContent>

        {editing && (
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
              isLoading={isSubmitting}
              disabled={isSubmitting}
              style={{ width: '200px', marginLeft: '1rem' }}
            />
          </SaveContainer>
        )}
      </Container>

      <FooterSection>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterSection>
    </Wrapper>
  );
};
