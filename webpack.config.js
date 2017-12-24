const webpack = require("webpack");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require("path");

let libraryName = "reactjs-popup";
const BUILD_DIR = path.resolve(__dirname, "lib");
const filename =
  process.env.NODE_ENV === "production"
    ? libraryName + ".min.js"
    : libraryName + ".js";

const WebpackConfig = {
  entry: "./src/Popup.js",
  devtool: "source-map",
  output: {
    path: BUILD_DIR,
    filename: filename,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".js"]
  },
  externals: {
    react: "react prop-types" // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};

// webpack production config.
if (process.env.NODE_ENV === "production") {
  WebpackConfig.plugins = [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    })
  ];
}

module.exports = WebpackConfig;
