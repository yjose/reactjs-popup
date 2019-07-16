/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      id: 'welcome',
      label: 'Home',
    },
    {
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      id: 'component-api',
      label: 'Component Api',
    },

    {
      id: 'use-cases',
      label: 'Use Cases',
      children: [
        {
          id: 'modal',
          label: 'React Modal',
        },
        {
          id: 'tooltip',
          label: 'React Tooltip',
        },
        {
          id: 'menu',
          label: 'React Menu',
        },
      ],
    },
    {
      id: 'advanced-use',
      label: 'Advanced use',
      children: [
        {
          id: 'controlled',
          label: 'Controlled Popup',
        },
        {
          id: 'nested-popup',
          label: 'Nested Popup',
        },
      ],
    },
    {
      id: 'styling',
      label: 'Styling',
      children: [
        {
          id: 'js-styling',
          label: 'Using Js',
        },
        {
          id: 'css-styling',
          label: 'Using CSS',
        },
      ],
    },

    {
      id: 'contributing',
      label: 'Contributing',
      children: [
        {
          id: 'how-to-contribute',
          label: 'How to contribute',
        },
        {
          id: 'road-map',
          label: 'Road Map',
        },
      ],
    },
  ],
};
