import React from 'react';

import Popup from '../../src';

const PositionRelative = () => {
  return (
    <div className="popups">
      <Popup
        trigger={
          <button style={{position: 'static'}} className="trigger">
            One
          </button>
        }>
        {<div className="content">Content one</div>}
      </Popup>
      <Popup
        trigger={
          <button style={{position: ''}} className="trigger">
            Two
          </button>
        }>
        {<div className="content">Content two</div>}
      </Popup>
      <Popup
        trigger={
          <button style={{position: ''}} className="trigger">
            Three
          </button>
        }
        modal>
        {<div className="content">Content three</div>}
      </Popup>
    </div>
  );
};

const PositionRelativeStory = {
  name: 'Position Relative',
  component: PositionRelative,
  props: {},
};

export default PositionRelativeStory;
