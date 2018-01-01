import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "Reactjs Component",
  url: "#"
});

const req = require.context("../src/stories", true, /\.js$/);

const load = () => {
  // require('./Library')
  req.keys().forEach(req);
};

configure(load, module);

//configure(() => require("../src"), module);
