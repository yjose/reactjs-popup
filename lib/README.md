# Reactjs-popup

[![Build Status](https://travis-ci.org/yjose/reactjs-popup.svg?branch=master)](https://travis-ci.org/yjose/reactjs-popup) [![BCH compliance](https://bettercodehub.com/edge/badge/yjose/reactjs-popup?branch=master)](https://bettercodehub.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/reactjs-popup.png?compact=true)](https://nodei.co/npm/reactjs-popup/)

> built with react Fragment : react 16 Tiny 3KB

## Welcome

[Reactjs-popup](https://react-popup.netlify.com) is a simple react popup component with a lot of benefits :

* Built with react fragment that's mean no additional wrapper divs in your code or in the trigger element.
* Does not inject HTML outside your app root.
* Function as children pattern to take control over your popup anywhere in your code.
* All this clocks in at around 3 kB zipped.

Requires React >= 16.0

## Demo

[**Live Demo**](https://react-popup.netlify.com)

![alt text](https://cdn-images-1.medium.com/max/800/1*x-TqQwyT2ADmnb51oRJCOg.gif)

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

## Contributing

### Clone Repo

Fork and then clone the repo

    git clone git@github.com:your-username/reactjs-popup.git

### Start Developing

Install all npm scripts:

```bash
npm install
#or
yarn install
```

we use storybook in this project.before starting, be sure to have some basic knowledge https://storybook.js.org/

Run Test in watch mode

```bash
npm run storybook
```

To make contributing simply you need to create a new story under src/stories directory ( you can copy/past any story to start with ).

In this story, you need to present the new features or the bug fix and don't forget to document your story.

Make Changes. If you want to contribute check out the [help wanted](https://github.com/yjose/reactjs-popup/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) issues for things that need fixing.

Before submitting a pull request run `npm run test` to run the unit-tests.

## Licensing

The code in this project is licensed under MIT license.
