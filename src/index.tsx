import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyle";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { GRAPHQL_URL } from "./constants";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("access_token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    createHttpLink({
      uri: GRAPHQL_URL,
    })
  ),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <BrowserRouter>
              <GlobalStyle />
              <App />
            </BrowserRouter>
          </ModalProvider>
        </ThemeProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
