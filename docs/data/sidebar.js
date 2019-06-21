/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const data = [
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
    label: 'Adcanced use',
    children: [
      {
        id: 'controlled',
        label: 'Controlled Popup',
      },
      {
        id: 'uncontrolled',
        label: 'UnControlled Popup',
      },
    ],
  },

  {
    id: 'contributing',
    label: 'Contributing',
  },
];

export default data;
