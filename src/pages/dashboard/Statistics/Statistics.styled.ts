import Modal from "styled-react-modal";
import styled from "styled-components";

export const StatisticsModal = Modal.styled`
display: flex;
flex-direction: column;
z-index: 99;
`;

export const ModalContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MoodChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw;
  margin: 1vw;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  & > * {
    padding: 5px;
  }
`;

export const ChartTitle = styled.span`
  font-weight: bold;
  font-size: 2rem;
  margin: 1vw;
`;
