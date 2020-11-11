import styled from "styled-components";

export const Image = styled.img<{ shadowColor: string }>`
  width: 200px;
  transition: 1s;
  cursor: pointer;
  border-radius: 100%;
  background-color: white;
  margin: 0 20px;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 50px ${({ shadowColor }) => shadowColor};
  }
`;
