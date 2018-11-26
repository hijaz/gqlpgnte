import React, { Component } from "react";
import "./App.css";
import "babel-polyfill";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

import App from "./github_endpoint/apollo/app";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "https://api.github.com/graphql",
      credentials: "include",
      headers: {
        authorization: "Bearer <GITHUB_TOKEN>"
      }
    })
  ]),
  cache: new InMemoryCache()
});

export class AppApolloGithub extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}
