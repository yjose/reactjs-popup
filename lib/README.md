# Reactjs-popup

[![Build Status](https://travis-ci.org/yjose/reactjs-popup.svg?branch=master)](https://travis-ci.org/yjose/reactjs-popup) [![BCH compliance](https://bettercodehub.com/edge/badge/yjose/reactjs-popup?branch=master)](https://bettercodehub.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/reactjs-popup.png?compact=true)](https://nodei.co/npm/reactjs-popup/)

> built with react Fragment : react 16 Tiny 3KB

A Simple React popup. You can use it as a tooltip, modal,subMenu and more ...

React Popup Component

## Demo

[**Live Demo**](http://yjose.github.io/reactjs-popup/)

## Installing / Getting started

```sh
npm install reactjs-popup --save
or
yarn add reactjs-popup -S
```

### Include the Component

```js
<Popup
  triggerOn="click"
  position="top,left"
  closeOnDocumentClick={true}
  trigger={<button>Button nested</button>}
>
  <div>popup content Here</div>
</Popup>
```

You can also use it with function as children pattern

```js
<Popup
  triggerOn="click"
  position="top,left"
  closeOnDocumentClick={true}
  trigger={<button>Button nested</button>}
>
  {(open, close) => (
    <div>
      content here
      <a className="close" onClick={close}>
        &times;
      </a>
    </div>
  )}
</Popup>
```

You can find more examples in the [reactjs-popup home page](http://yjose.github.io/reactjs-popup/)

## Contributing

### Clone Repo

Fork and then clone the repo

    git clone git@github.com:your-username/reactjs-popup.git

### Start Developing

Install all npm scripts:

    npm install
    or
    yarn install

we use storybook in this project.before starting, be sure to have some basic knowledge https://storybook.js.org/

Run storybook :

```
npm run storybook
```

Run Test in watch mode

```
npm run storybook
```

To make contributing simply you need to create a new story with documentation under src/stories directory ( you can copy/past any story to start with ).

In this story, you need to present the new features or the bug fix and don't forget to document your story by using storybook info addon.

Make Changes. If you want to contribute check out the [help wanted](https://github.com/yjose/reactjs-popup/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) issues for things that need fixing.

Before submitting a pull request run `npm run test` to run the unit-tests and `npm run eslint` to check for linting errors in your changes.

## Licensing

The code in this project is licensed under MIT license.
