import axios from "axios";
import React from "react";
import fs from "fs";
import path from "path";
import webpack from "webpack";
import { ReportChunks } from "react-universal-component";
import flushChunks from "webpack-flush-chunks";

import APPCONFIG from "./src/config.json";

const resolve = p => path.resolve(__dirname, p);
const nodeModules = resolve("./node_modules");

// for SSR of dynamic imports
const externals = fs
  .readdirSync(nodeModules)
  .filter(
    moduleName =>
      !/\.bin|require-universal-module|react-universal-component|webpack-flush-chunks/.test(
        moduleName
      )
  )
  .reduce((externals, moduleName) => {
    externals[moduleName] = moduleName;
    return externals;
  }, {});

export default {
  getSiteProps: () => ({
    title: "React Popup Component - Modals,Tooltips and Menus —  All in one"
  }),
  siteRoot: "/",
  getRoutes: async () => {
    const routes = Object.entries(APPCONFIG.menu).map(r => {
      const path = `/${r[0].replace(new RegExp(" ", "g"), "-").toLowerCase()}`;
      const file = r[1];
      const getProps = () => ({
        file
      });
      return { path, getProps };
    });

    return [...routes];
  },
  renderToHtml: (renderToString, App, meta, prodStats) => {
    const chunkNames = [];
    const appHtml = renderToString(
      <ReportChunks report={chunkName => chunkNames.push(chunkName)}>
        <App />
      </ReportChunks>
    );

    const { scripts } = flushChunks(prodStats, {
      chunkNames
    });

    meta.scripts = scripts.filter(script => script.split(".")[0] !== "app");
    return appHtml;
  },

  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />

        <title>
          React Popup Component - Modals,Tooltips and Menus —  All in one
        </title>

        <meta
          name="description"
          content="A Simple React popup component.Use it as a tooltip,modal,sub-menu and match more ..."
        />
        <meta
          name="image"
          content="https://react-popup.netlify.com/reactjs-popup.png"
        />

        <meta
          itemProp="name"
          content="React Popup Component - Modals,Tooltips and Menus —  All in one"
        />
        <meta
          itemProp="description"
          content="A Simple React popup component.Use it as a tooltip,modal,sub-menu and match more ..."
        />
        <meta
          itemProp="image"
          content="https://react-popup.netlify.com/reactjs-popup.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="React Popup Component - Modals,Tooltips and Menus —  All in one"
        />
        <meta
          name="twitter:description"
          content="A Simple React popup component.Use it as a tooltip,modal,sub-menu and match more ..."
        />
        <meta name="twitter:creator" content="@ELaziziYoussouf" />
        <meta
          name="twitter:image:src"
          content="https://react-popup.netlify.com/reactjs-popup.png"
        />

        <meta
          name="og:title"
          content="React Popup Component - Modals,Tooltips and Menus —  All in one"
        />
        <meta
          name="og:description"
          content="A Simple React popup component.Use it as a tooltip,modal,sub-menu and match more ..."
        />
        <meta
          name="og:image"
          content="https://react-popup.netlify.com/reactjs-popup.png"
        />
        <meta name="og:url" content="https://react-popup.netlify.com/" />
        <meta
          name="og:site_name"
          content="React Popup - Simple Reactjs Popup"
        />
        <meta name="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Body>
        {children}
        {renderMeta.scripts &&
          renderMeta.scripts.map(script => (
            <script type="text/javascript" src={`/${script}`} />
          ))}
      </Body>
    </Html>
  ),

  webpack: (config, { defaultLoaders, stage }) => {
    // We replace the existing JS rule with one, that also transforms from
    // remark-collapse
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.md$/,
            // remark-collapse has ES6 so we need to babel it
            use: ["json-loader", "front-matter-loader"]
          },
          defaultLoaders.jsLoader,
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader
        ]
      }
    ];

    if (stage === "node") {
      config.externals = externals;

      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1
        })
      );
    }

    if (stage === "prod") {
      config.output.filename = "app.[chunkHash:6].js";
      config.output.chunkFilename = "[name].[chunkHash:6].js";

      config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: "bootstrap",
          filename: "bootstrap.[chunkHash:6].js",
          minChunks: Infinity
        })
      );
    }
    return config;
  }
};
