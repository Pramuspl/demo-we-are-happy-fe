import { gql } from "@apollo/client";

export const Auth = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      access_token
      role
    }
  }
`;
