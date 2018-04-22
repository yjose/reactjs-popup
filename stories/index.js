import React from "react";
import ReactDOM from "react-dom";
// import story-router component

import StoryRouter from "story-router";
import "story-router/story-router.css";
import "./index.css";

import Stories from "./src/index";

//const Components = Object.entries(require("./stories/*.js"));
const App = () => <StoryRouter stories={Stories} />;

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
