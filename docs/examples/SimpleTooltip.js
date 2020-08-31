import React from 'react';
import Warper from './Warper';
import Popup from '../../dist/index';
//

const SimpleTooltip = () => (
  <Popup
    trigger={
      <button type="button" className="button">
        Trigger
      </button>
    }
    position="right center"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup>
);

export default SimpleTooltip;
