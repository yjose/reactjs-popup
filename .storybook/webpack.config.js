// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// load the default config generator.
const path = require("path");
/*const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

const rules = [
  {
    test: /\.scss|css$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src/")
  },
  {
    test: /\.md$/,
    use: "raw-loader"
  }
];

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push(...rules);

  config.devtool = "eval-cheap-module-source-map";
  return config;
};*/

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src/")
      },

      {
        test: /\.md$/,
        use: "raw-loader"
      }
    ]
  }
};
