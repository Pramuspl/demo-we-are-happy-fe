import styled from "styled-components";

export const Image = styled.img<{ shadowColor: string }>`
  width: 200px;
  max-width: 40%;
  transition: 1s;
  cursor: pointer;
  border-radius: 100%;
  background-color: white;
  margin: 0 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 5px;
  }

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 50px ${({ shadowColor }) => shadowColor};
  }
`;
