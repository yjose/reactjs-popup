import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
setOptions({
  name: "Reactjs Component",
  url: "#"
});

//const req = require.context("../src/stories", true, /\.js$/);

const load = () => {
  require("../src/index");
};

configure(load, module);

//configure(() => require("../src"), module);
