import styled from 'styled-components';
import {
  MdEdit,
  MdChatBubble,
  MdMail,
  MdWork,
  MdLocationOn,
  MdAddBox,
} from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';

import backgroundImage from '../../assets/images/background.png';

export const Wrapper = styled.div`
  background-color: #f3f3f3;
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

export const BackgroundImage = styled.header`
  width: 100%;
  height: 368px;
  background-color: #d6d6d6;

  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  bottom: -84px;

  display: flex;
  align-items: flex-end;
  flex-direction: row;

  @media (max-width: 907px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    bottom: -12rem;
  }
`;

export const ProfileContainer = styled.div``;

export const ProfileImage = styled.div`
  width: 222px;
  height: 222px;
  border-radius: 8px;

  background-color: #d6d6d6;

  border: 8px solid #fefefe;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const NoPhoto = styled(BsBuilding)`
  font-size: 7rem;
  color: #999999;
`;

export const ContentContainer = styled(Container)`
  margin-top: 12rem;

  @media (max-width: 907px) {
    margin-top: 22rem;
  }
`;

export const ProfileDetails = styled.div`
  position: absolute;
  margin-top: 0.5rem;

  @media (max-width: 907px) {
    margin-top: 10rem;
    width: 720px;
  }

  @media (max-width: 770px) {
    width: 520px;
  }

  @media (max-width: 570px) {
    width: 320px;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.h1`
  font-weight: 500;
  font-size: 1.8rem;
`;

export const EditInfoButton = styled.button`
  margin-left: 1rem;
  border: none;
  background-color: var(--caramel-800);
  font-size: 0;
  padding: 0.5rem;
  border-radius: 50%;
`;

export const EditIcon = styled(MdEdit)`
  font-size: 1.5rem;
  color: var(--white);
`;

export const ChatBubble = styled(MdChatBubble)`
  font-size: 1.5rem;
  margin-right: 0.8rem;
  color: var(--caramel-800);
`;

export const Mail = styled(MdMail)`
  font-size: 1.5rem;
  margin-right: 0.8rem;
  color: var(--caramel-800);
`;

export const Work = styled(MdWork)`
  font-size: 1.5rem;
  margin-right: 0.8rem;
  color: var(--caramel-800);
`;

export const LocationOn = styled(MdLocationOn)`
  font-size: 1.5rem;
  margin-right: 0.8rem;
  color: var(--caramel-800);
`;

export const Function = styled.span`
  font-size: 1.1rem;
`;

export const TabsContainer = styled.div`
  margin-bottom: 2.2rem;
  margin-left: 2rem;

  @media (max-width: 907px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 0;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

export const TabItem = styled.span<{ active?: boolean }>`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  background-color: red;
  margin-right: 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? 'var(--white)' : 'var(--blue-800)')};
  background-color: ${(props) =>
    props.active ? 'var(--blue-500)' : 'transparent'};

  &:hover {
    cursor: pointer;
  }
`;

export const TabContent = styled.div<{ active?: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};

  max-width: 628px;
  width: 100%;

  form {
    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border-radius: 16px;
  outline: none;
  padding: 0.8rem 1rem;
  margin-bottom: 0.4rem;

  border: 1px solid #bbbbbb;
  background-color: #fefefe;

  &:hover {
    border-color: #858585;
  }

  &:focus {
    border-color: var(--caramel-400);
  }
`;

export const Select = styled.select`
  width: 100%;
  outline: none;
  background-color: #fefefe;
  border: 1.5px solid #bbbbbb;
  border-radius: 16px;
  padding: 12px 10px;
  margin-bottom: 0.8rem;
`;

export const InputContainer = styled.div`
  background-color: #fefefe;
  border: 1.5px solid #bbbbbb;
  border-radius: 16px;
  padding: 12px 16px;
  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;
  flex-direction: row;

  &:hover {
    border-color: #858585;
  }

  &:focus-within {
    border-color: var(--caramel-400);
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const DataContainer = styled.div`
  width: 100%;
  border: 1px solid #bbbbbb;
  background-color: #fefefe;
  border-radius: 16px;
  padding: 1.2rem 1.4rem;
`;

export const DataTitle = styled.span`
  text-transform: uppercase;
  font-weight: 500;
`;

export const BigText = styled.p`
  line-height: 1.4rem;
  margin-top: 0.3rem;
`;

export const DataText = styled.p`
  line-height: 1.4rem;
`;

export const RowData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const SocialMediaLogo = styled.img`
  margin-right: 0.7rem;
  width: 1.5rem;
  height: 1.4rem;
  pointer-events: none;
`;

export const SocialMediaLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1.4rem;
  background-color: #fefefe;
  border: 1px solid #bbbbbb;

  color: #696969;

  font-weight: 500;
`;

export const AddJob = styled.button`
  border: 1px dashed #bbbbbb;
  outline: none;
  border-radius: 1rem;
  background-color: #fefefe;

  width: 206px;
  height: 149px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AddJobIcon = styled(MdAddBox)`
  font-size: 1.4rem;
  color: #858585;
  margin-bottom: 0.5rem;
`;

export const AddJobText = styled.span`
  color: #858585;
  line-height: 1.3rem;
`;

export const SaveContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.h1`
  margin-top: 80px;
  font-weight: 500;
  font-size: 1.8rem;
`;

export const JobProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

export const JobWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TrashIcon = styled(FaTrash)`
  color: var(--error-700);
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const FooterSection = styled.div`
  margin-top: -8rem;
  background: linear-gradient(180deg, #f3f3f3 0%, #ffe6ce 100%);

  @media (max-width: 840px) {
    margin-top: -3.5rem;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;
