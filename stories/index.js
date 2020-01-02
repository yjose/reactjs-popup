import React from 'react';
import ReactDOM from 'react-dom';

import StoryRouter from 'story-router';
import 'story-router/story-router.css';
import './index.css';

import Stories from './src/index';

const App = () => <StoryRouter stories={Stories} />;

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
