---
title:  React Popup | Component Contributing Guide
description: A Simple React popup component. Use it as a tooltip,modal,sub-menu and match more ...
---

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
