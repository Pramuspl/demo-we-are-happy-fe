import { ApolloError } from "@apollo/client";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Dropdown, Input, Password, PrimaryButton } from "../../components";
import {
  Auth as AuthType,
  LoginMutation,
  useLoginMutation,
  RegisterMutation,
  useRegisterMutation,
  Roles,
} from "../../generated/graphql";
import {
  LoginContainer,
  Logo,
  ModalContent,
  RegisterLink,
  RegisterModal,
} from "./Auth.styled";
import logo from "../../img/logo.png";

export const Auth = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerUsername, setRegisterUsername] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [registerRole, setRegisterRole] = useState<Roles>(Roles.Employee);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const [loginMutation] = useLoginMutation({
    variables: {
      username: username,
      password: password,
    },
    onCompleted: (data: LoginMutation) => loginSuccess(data.login),
    onError: (error: ApolloError) => setMessage(error.message),
  });

  const [registerMutation] = useRegisterMutation({
    variables: {
      username: registerUsername,
      password: registerPassword,
      role: registerRole,
    },
    onCompleted: (data: RegisterMutation) => registerSuccess(),
    onError: (error: ApolloError) => setMessage(error.message),
  });

  const loginSuccess = (auth: AuthType) => {
    if (auth.access_token) {
      localStorage.setItem("access_token", auth.access_token);
      localStorage.setItem("role", auth.role);
      setLoggedIn(true);
    }
  };

  const registerSuccess = () => {
    setMessage("Registration successful!");
    setModalOpen(false);
  };

  if (loggedIn || localStorage.getItem("access_token")) {
    return <Redirect to="/" />;
  }
  return (
    <LoginContainer>
      <RegisterModal isOpen={modalOpen}>
        <ModalContent>
          <Input
            id="username"
            label="Username"
            value={registerUsername}
            onChange={(event) => setRegisterUsername(event.target.value)}
          />
          <Password
            id="password"
            label="Password"
            value={registerPassword}
            onChange={(event) => setRegisterPassword(event.target.value)}
          />
          <Dropdown
            label="Role"
            options={[
              { text: "Employee", value: Roles.Employee },
              { text: "Manager", value: Roles.Manager },
            ]}
            value={registerRole}
            onChange={(event) => {
              const value = event.target.value as Roles;
              setRegisterRole(value);
            }}
          />
          <PrimaryButton onClick={() => registerMutation()}>
            Register
          </PrimaryButton>
          <RegisterLink onClick={() => setModalOpen(false)}>
            Cancel
          </RegisterLink>
        </ModalContent>
      </RegisterModal>
      <Logo src={logo} alt="logo" />
      <Input
        id="username"
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Password
        id="password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <span>{message}&nbsp;</span>
      <PrimaryButton onClick={() => loginMutation()}>Login</PrimaryButton>
      <RegisterLink onClick={() => setModalOpen(true)}>Register</RegisterLink>
    </LoginContainer>
  );
};
