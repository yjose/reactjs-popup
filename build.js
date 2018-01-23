"use strict";

const fs = require("fs");
const del = require("del");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const uglify = require("rollup-plugin-uglify");
const replace = require("rollup-plugin-replace");
const pkg = require("./package.json");

const bundles = [
  {
    format: "es",
    ext: ".es.js",
    plugins: [],
    babelPresets: [["env", { modules: false }], "react"],
    babelPlugins: ["transform-class-properties", "external-helpers"]
  },
  {
    format: "cjs",
    ext: ".browser.js",
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ],
    babelPresets: [["env", { modules: false }], "react"],
    babelPlugins: ["transform-class-properties"]
  },
  {
    format: "umd",
    ext: ".dev.js",
    plugins: [],
    babelPresets: [["env", { modules: false }], "react"],
    babelPlugins: ["transform-class-properties"],
    moduleName: "reactjs-popup"
  },
  {
    format: "umd",
    ext: ".js",
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("development")
      })
    ],
    babelPresets: [["env", { modules: false }], "react"],
    babelPlugins: ["transform-class-properties"],
    moduleName: "reactjs-popup"
  },
  {
    format: "umd",
    ext: ".min.js",
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      }),
      uglify()
    ],
    babelPresets: [["env", { modules: false }], "react"],
    babelPlugins: ["transform-class-properties"],
    moduleName: "reactjs-popup",
    minify: true
  }
];

let promise = Promise.resolve();

// Clean up the output directory
promise = promise.then(() => del(["lib/*"]));

// Compile source code into a distributable format with Babel and Rollup
for (const config of bundles) {
  promise = promise.then(() =>
    rollup
      .rollup({
        input: "src/Popup.js",
        external: Object.keys(pkg.peerDependencies),
        plugins: [
          babel({
            babelrc: false,
            exclude: "node_modules/**",
            presets: config.babelPresets,
            plugins: config.babelPlugins
          })
        ].concat(config.plugins)
      })
      .then(bundle =>
        bundle.write({
          file: `lib/${config.moduleName || "reactjsPopup"}${config.ext}`,
          format: config.format,
          sourcemap: !config.minify,
          name: config.moduleName
        })
      )
  );
}

// Copy package.json and LICENSE
promise = promise.then(() => {
  delete pkg.devDependencies;
  delete pkg.scripts;

  fs.writeFileSync(
    "lib/package.json",
    JSON.stringify(pkg, null, "  "),
    "utf-8"
  );
  fs.writeFileSync("lib/LICENSE", fs.readFileSync("LICENSE", "utf-8"), "utf-8");
  fs.writeFileSync(
    "lib/README.md",
    fs.readFileSync("README.md", "utf-8"),
    "utf-8"
  );
  fs.writeFileSync(
    "lib/.npmignore",
    fs.readFileSync(".npmignore", "utf-8"),
    "utf-8"
  );
});

promise.catch(err => console.error(err.stack)); // eslint-disable-line no-console
