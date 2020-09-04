import React from 'react';
import Warper from './Warper';
import Popup from 'reactjs-popup';
//

const SimpleTooltip = () => (
  <Popup
    trigger={
      <button type="button" className="button">
        Trigger
      </button>
    }
    on="hover"
    position="right center"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup>
);

export default Warper(SimpleTooltip);
