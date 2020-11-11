import Modal from "styled-react-modal";
import styled from "styled-components";

export const StatisticsModal = Modal.styled`
display: flex;
flex-direction: column;
z-index: 99;
`;

export const ModalContent = styled.div`
  width: 80vw;
  height: 90vh;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
