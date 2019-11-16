import React from 'react';

export default ({style = {}}) => (
  <a href="https://www.buymeacoffee.com/yjose" target="_blank">
    <img
      src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
      alt="Buy Me A Coffee"
      style={{height: '51px', ...style}}
    />
  </a>
);
