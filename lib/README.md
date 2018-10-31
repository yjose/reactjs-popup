# Reactjs-popup

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

> built with react Fragment : react 16 Tiny 3KB

## Welcome

[Reactjs-popup](https://react-popup.netlify.com) is a simple react popup component with a lot of benefits :

- Built with react fragment that’s mean no additional wrapper Divs in your code or in the trigger element. 😮
- Does not inject HTML outside your app root. 📦
- Function as children pattern to take control over your popup anywhere in your code. 💪
- Modal, Tooltip, Menu : All in one 🏋️
- Full style customization 👌
- Easy to use. 🚀
- IE Support.🚀
- TypeScript Support 👌
- All these clocks in at around 3 kB zipped. ⚡️

Requires React >= 16.0

## Demo

[**Live Demo**](https://react-popup.netlify.com)

![alt text](https://cdn-images-1.medium.com/max/800/1*x-TqQwyT2ADmnb51oRJCOg.gif)

## TO DO

- [x] Create repository && publish package
- [x] Create reactjs-popup Home page
- [x] Tooltip Support
- [x] Modal Support
- [x] Menu & Nested Menu Support
- [x] Add Live examples
- [ ] Animation API
- [ ] Toast Support
- [ ] suggest a feature [here](https://github.com/yjose/reactjs-popup/labels/Features)

## Installing / Getting started

This package is available in npm repository as reactjs-popup. It will work correctly with all popular bundlers.

```bash
npm install reactjs-popup --save
```

Using yarn

```bash
yarn add reactjs-popup -s
```

## Include the Component

To start using reactjs popup you just need to import the component from the reactjs-popup package.

```jsx
import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
```

You can find more examples in the [reactjs-popup home page](https://react-popup.netlify.com)

# Contributing

## Clone Repo

Fork and then clone the repo

    git clone git@github.com:your-username/reactjs-popup.git

## Start Developing

Install all npm scripts:

    npm install
    or
    yarn install

we use a simple package called parcel-story it's a simple storybook alternative more info https://github.com/yjose/parcel-story

Run parcel-story :

```
yarn start
```

Run Test in watch mode

```
yarn test-watch
```

To make contributing simply you need to create a new story with documentation under stories/src directory ( you can copy/past any story to start with ).

In this story, you need to present the new features or the bug fix and don't forget to comment your code :) .

Make Changes. If you want to contribute check out the [help wanted](https://github.com/yjose/reactjs-popup/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) issues for things that need fixing.

Before submitting a pull request run `npm run test` to run the unit-tests and `npm run eslint` to check for linting errors in your changes.

## Licensing

The code in this project is licensed under MIT license.

# Show your support!

That's all, thank you for your attention, please [![Star on GitHub][github-star-badge]][github-star] the repo to show your support...

...we are all made of stars [![Star on GitHub][github-star-badge]][github-star] !

[build-badge]: https://img.shields.io/travis/yjose/reactjs-popup.svg?style=flat-square
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
