import styled from "styled-components";

export const DashboardContainer = styled.div`
  & > * {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 1s;
  transform: scale(1) translateY(-50%);

  &.voted {
    transform: scale(0) translateY(1000px);
    opacity: 0;
  }
`;

export const VoteCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const VoteConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: 1.5s;
  transform: scale(0) translateY(-300px);

  &.voted {
    transform: scale(1) translateY(-50%);
    opacity: 1;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const Text = styled.span`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: calc(1em + 1vw);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 0;
  }
`;
