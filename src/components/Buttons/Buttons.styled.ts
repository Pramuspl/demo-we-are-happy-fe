import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  height: 50px;
  width: 100%;
  margin: 5px;
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.lightBackground};
  transition: 0.3s linear;

  &:hover {
    opacity: 80%;
  }
`;

export const PrimaryButton = styled(BaseButton)<{ border?: boolean }>`
  background: ${({ theme }) =>
    `linear-gradient(270deg, ${theme.colors.accentPrimary} 0%, ${theme.colors.accentSecondary} 100%)`};
  color: ${({ theme }) => theme.colors.lightBackground};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors.lightBackground}` : "none"};
`;

export const SecondaryButton = styled(BaseButton)<{ border?: boolean }>`
  background: ${({ theme }) => theme.colors.lightBackground};
  color: ${({ theme }) => theme.colors.accentPrimary};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors.accentPrimary}` : "none"};
`;
