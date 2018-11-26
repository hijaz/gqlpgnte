import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

import { AppRelayGithub as App } from "./AppRelayGithub";
//import { AppApolloGithub as App } from "./AppApolloGithub";
//import { AppUrqlGithub as App } from "./AppUrqlGithub";

ReactDOM.render(<App />, document.getElementById("root"));
