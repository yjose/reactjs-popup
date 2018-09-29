"use strict";

const fs = require("fs");
const del = require("del");
const pkg = require("./package.json");
const Bili = require("bili");

const options = {
  input: "./src/index.js",
  outDir: "lib",
  name: "reactjs-popup",
  format: ["es", "cjs", "umd", "umd-min"],
  banner: true,
  target: "browser",
  external: Object.keys(pkg.peerDependencies)
};

// some confuse between babel config for parcel that use v6 and Bili that's use V7
const babelBiliConfig = {
  presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
const babelParcelConfig = {
  presets: ["env", "react"],
  plugins: ["transform-class-properties"]
};

// Copy package.json, LICENSE,README and npmignore files
const writePackageFiles = () => {
  delete pkg.devDependencies;
  delete pkg.scripts;

  fs.writeFileSync(
    "./lib/package.json",
    JSON.stringify(pkg, null, "  "),
    "utf-8"
  );
  fs.writeFileSync(
    "./lib/LICENSE",
    fs.readFileSync("LICENSE", "utf-8"),
    "utf-8"
  );
  fs.writeFileSync(
    "./lib/README.md",
    fs.readFileSync("README.md", "utf-8"),
    "utf-8"
  );
  fs.writeFileSync(
    "lib/.npmignore",
    fs.readFileSync(".npmignore", "utf-8"),
    "utf-8"
  );
  fs.writeFileSync(
    "./lib/index.d.ts",
    fs.readFileSync("src/index.d.ts", "utf-8"),
    "utf-8"
  );
};

// and use babel config V7
// Clean up the output directory
const Build = () => {
  console.log("Delete old build Folder ....");
  del(["lib/*"]).then(() => {
    fs.writeFileSync(
      "./.babelrc",
      JSON.stringify(babelBiliConfig, null, "  "),
      "utf-8"
    );
    Bili.write(options).then(() => {
      fs.writeFileSync(
        "./.babelrc",
        JSON.stringify(babelParcelConfig, null, "  "),
        "utf-8"
      );
    });

    writePackageFiles();
  });
};

let promise = Promise.resolve();
promise = promise.then(Build);

// catch errors
promise.catch(err => console.error(err.stack));
