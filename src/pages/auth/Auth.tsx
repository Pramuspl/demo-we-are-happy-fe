import { ApolloError } from "@apollo/client";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Input, Password, PrimaryButton } from "../../components";
import {
  Auth as AuthType,
  LoginMutation,
  useLoginMutation,
} from "../../generated/graphql";
import { LoginContainer, Logo } from "./Auth.styled";
import logo from "../../img/logo.png";

export const Auth = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [loginMutation] = useLoginMutation({
    variables: {
      username: username,
      password: password,
    },
    onCompleted: (data: LoginMutation) => loginSuccess(data.login),
    onError: (error: ApolloError) => console.log(error.message),
  });

  const loginSuccess = (auth: AuthType) => {
    if (auth.access_token) {
      localStorage.setItem("access_token", auth.access_token);
      localStorage.setItem("role", auth.role);
      setLoggedIn(true);
    }
  };

  if (loggedIn || localStorage.getItem("access_token")) {
    return <Redirect to="/" />;
  }
  return (
    <LoginContainer>
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
      <PrimaryButton onClick={() => loginMutation()}>Login</PrimaryButton>
    </LoginContainer>
  );
};
