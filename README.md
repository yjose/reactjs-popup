# Reactjs-popup

## [⚠️ Looking for maintainers for reactjs-popup library](https://github.com/yjose/reactjs-popup/issues/332)

[![Build Status][build-badge]][build]
[![npm bundle size][npm-bundle-size]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]

[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-16-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

[Reactjs-popup](https://react-popup.elazizi.com) is a simple react popup component that helps you create simple and complex Modals, tooltips, and Menus for your next React App.

You should consider using reactjs-popup for those couple of reasons :

- **✅ Modal, Tooltip, Menu : All in one library 🏋️**
- **✅ Very tiny library (3kb) ⚡️**
- **✅ Fully accessible**
- **✅ Function as children pattern to take control over your popup anywhere in your code 💪**
- **✅ Easy to use 🚀**
- **✅ TypeScript Support 👌**
- **✅ IE Support. 🚀**
- **✅ Full style customization 👌 (js, CSS, styled-components)**
- **✅ Support for controlled Modals & Tooltips**
- **✅ Default & Custom Animations**

## Demo

This is a simple Demo to demonstrate how you can create Modals, Tooltips, Menus using `reactjs-popup`.

[**Live Demo**](https://react-popup.elazizi.com)

![ reactjs popup demo](https://user-images.githubusercontent.com/11137944/92184555-74556c00-ee49-11ea-81c5-eb2a0087e93a.gif)

---

Sponsored by

[![frigade-sponsor](https://github-production-user-asset-6210df.s3.amazonaws.com/11137944/266065760-a35a2e99-0a97-4d0d-982a-4c48bb2f1886.png)](https://frigade.com/?source=react-popup)

React-JS Popup is proud to be sponsored by [Frigade](https://frigade.com/?source=react-popup), a developer tool for building better product onboarding: guided tours, getting started checklists, announcements, and more.

---

## Installing / Getting started

This package is available in NPM repository as reactjs-popup. It will work correctly with all popular bundlers.

```bash
npm install reactjs-popup --save
```

Using yarn

```bash
yarn add reactjs-popup
```

## Include the Component

To start using reactjs popup you just need to import the component from the reactjs-popup package.

```jsx
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
```

# Documentation

- [Getting Started](https://react-popup.elazizi.com/)
- [Modals, Tooltips, Menus examples ](https://react-popup.elazizi.com/react-modal)
- [Custom Styling](https://react-popup.elazizi.com/css-styling)
- [Controlled Components](https://react-popup.elazizi.com/controlled-popup)
- [Animations](https://react-popup.elazizi.com/react-popup-animation)
- [Migrating from V1 to V2 ](https://react-popup.elazizi.com/migrate-from-v1-to-v2)

# Contributing

### Clone Repo

Fork and then clone the repo

    git clone git@github.com:your-username/reactjs-popup.git

### Start Developing

Install all npm scripts:

    npm install
    or
    yarn install

we use [storybook](https://storybook.js.org/) to build popup use cases.

To start storybook:

```
yarn storybook
```

Run Test in watch mode

```
yarn test
```

To make contributing simply you need to create a new story for your use case under `stories` directory to demonstrate the new features or the bug fix .

Make Changes 😀.

If you want to contribute check out the [help wanted](https://github.com/yjose/reactjs-popup/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) issues for things that need fixing.

Before submitting a pull request run `npm run test` to run the unit tests .

## Licensing

The code in this project is licensed under MIT license.

# Show your support!

## Sponsor

if you are interested to Sponsor this library and list your logo in this section, [Make sure to contact me](https://twitter.com/ElaziziYoussouf).

## Show Your Support

<a href="https://www.buymeacoffee.com/yjose" target="_blank">
  <img
    src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
    alt="Buy Me A Coffee"
    height="40px"
  />
</a>
<br />

That's all, thank you for your attention, please [![Star on GitHub][github-star-badge]][github-star] the repo to show your support.

we are all made of stars [![Star on GitHub][github-star-badge]][github-star]

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="http://elazizi.com/">
          <img width="150" height="150" src="https://github.com/yjose.png?v=3&s=150">
          </br>
          Youssouf EL Azizi
        </a>
        <div>
          <a href="https://twitter.com/ElaziziYoussouf">
            <img src="https://img.shields.io/twitter/follow/ElaziziYoussouf.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>

[build-badge]: https://img.shields.io/travis/yjose/reactjs-popup.svg?style=flat-square
[npm-bundle-size]: https://img.shields.io/bundlephobia/minzip/reactjs-popup?style=flat-square
[build]: https://travis-ci.org/yjose/reactjs-popup
[version-badge]: https://img.shields.io/npm/v/reactjs-popup.svg?style=flat-square
[package]: https://www.npmjs.com/package/reactjs-popup
[downloads-badge]: https://img.shields.io/npm/dt/reactjs-popup.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/reactjs-popup
[license-badge]: https://img.shields.io/npm/l/reactjs-popup.svg?style=flat-square
[license]: https://github.com/yjose/reactjs-popup/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/yjose/reactjs-popup/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/yjose/reactjs-popup.svg?style=social
[github-watch]: https://github.com/yjose/reactjs-popup/watchers
[github-star-badge]: https://img.shields.io/github/stars/yjose/reactjs-popup.svg?style=social
[github-star]: https://github.com/yjose/reactjs-popup/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20reactjs-popup%20by%20%40ElaziziYoussouf%20https%3A%2F%2Fgithub.com%2Fyjose%2Freactjs-popup%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/yjose/reactjs-popup.svg?style=social
[all-contributors]: https://github.com/yjose/all-contributors
