import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  font-size: 2em;
  height: 50px;
  padding: 0 50px;
  font-size: 1em;
  font-weight: bold;
  margin: 5px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s linear;
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SecondaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
`;
