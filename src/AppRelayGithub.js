import React, { Component } from "react";
import "./App.css";
import "babel-polyfill";

import App from "./github_endpoint/relay/app_pg";

import { Environment, Network, RecordSource, Store } from "relay-runtime";

require("es6-promise").polyfill();
require("isomorphic-fetch");

function fetchQuery(operation, variables) {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer <GITHUB_TOKEN>"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export class AppRelayGithub extends Component {
  render() {
    console.log(environment);
    return <App env={environment} />;
  }
}
