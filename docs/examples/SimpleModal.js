import React from 'react';
import Warper from './Warper';
import Popup from 'reactjs-popup';
//

const SimpleModal = () => (
  <Popup
    trigger={
      <button type="button" className="button">
        {' '}
        Open Modal{' '}
      </button>
    }
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);

export default Warper(SimpleModal);
