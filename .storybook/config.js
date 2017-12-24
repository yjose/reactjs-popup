import { configure } from '@storybook/react';

function loadStories() {
  require('../src');
}

configure(loadStories, module);
