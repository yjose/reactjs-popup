import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";

setOptions({
  name: "Reactjs Component",
  url: "#",
  downPanelInRight: true,
  hierarchySeparator: /\//,
  sortStoriesByKind: true
});
setDefaults({
  header: false,
  inline: true,
  source: true
});

const req = require.context("../src/stories", true, /\.js$/);

const load = () => {
  // require('./Library')
  req.keys().forEach(req);
};

configure(load, module);

//configure(() => require("../src"), module);
