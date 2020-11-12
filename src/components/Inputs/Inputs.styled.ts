import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    color: black;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
  }
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  height: 38px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 0 10px;

  &:active,
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: #c4c4e8;
  }
`;

export const StyledSelect = styled.select`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  height: 38px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 0 10px;

  &:active,
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledCheckbox = styled.span`
  height: 15px;
  width: 15px;
  border: 2px solid ${({ theme }) => theme.colors.accentPrimary};
  background-color: ${({ theme }) => theme.colors.lightBackground};

  &:after {
    pointer-events: none;
    content: "";
    display: none;
    margin-left: 3px;
    width: 5px;
    height: 10px;
    border: solid ${({ theme }) => theme.colors.lightBackground};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckboxContainer = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  label {
    margin-left: 5px;
  }

  & input:checked ~ ${StyledCheckbox} {
    background-color: ${({ theme }) => theme.colors.accentPrimary};
  }

  & input:checked ~ ${StyledCheckbox}:after {
    display: block;
  }
`;
