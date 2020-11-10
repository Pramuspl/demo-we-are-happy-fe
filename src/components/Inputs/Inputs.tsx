import React from "react";
import {
  CheckboxContainer,
  StyledInput,
  InputContainer,
  StyledSelect,
  StyledCheckbox,
} from "./Inputs.styled";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: string;
};

type DropdownProps = InputProps & {
  options: { text: string; value: string }[];
};

export const Checkbox = ({ id, label }: InputProps) => {
  return (
    <CheckboxContainer>
      <input type="checkbox" id={label} />
      <StyledCheckbox />
      {label && <label htmlFor={id}>{label}</label>}
    </CheckboxContainer>
  );
};

export const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput id={id} {...props} />
    </InputContainer>
  );
};

export const Password = ({ id, label, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        type="password"
        placeholder={label ? "" : "Password"}
        {...props}
      />
    </InputContainer>
  );
};

export const Dropdown = ({ id, label, options }: DropdownProps) => {
  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledSelect>
        {options.map((opt) => (
          <option value={opt.value}>{opt.text}</option>
        ))}
      </StyledSelect>
    </InputContainer>
  );
};
