import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 300px;
  background-color: white;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.borderRadius};

  & > * {
    margin: 20px 0;
  }
`;
