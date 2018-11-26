import React, { Component } from "react";
import "./App.css";
import "babel-polyfill";
import { Provider, Client } from "urql";

import App from "./github_endpoint/urql/app";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const client = new Client({
  url: "https://api.github.com/graphql",
  fetchOptions: () => {
    return {
      headers: {
        authorization: "Bearer <GITHUB_TOKEN>"
      }
    };
  }
});

export class AppUrqlGithub extends Component {
  render() {
    return (
      <Provider client={client}>
        <App />
      </Provider>
    );
  }
}
