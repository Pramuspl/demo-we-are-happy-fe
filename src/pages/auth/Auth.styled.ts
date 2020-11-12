import styled from "styled-components";
import Modal from "styled-react-modal";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  & > * {
    margin: 10px 0;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const RegisterLink = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const RegisterModal = Modal.styled`
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-content: center;
`;
