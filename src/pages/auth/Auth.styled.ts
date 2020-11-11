import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  & > * {
    margin: 20px 0;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
`;
