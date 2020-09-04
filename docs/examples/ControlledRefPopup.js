import React, { useRef } from 'react';
import Warper from './Warper';
import Popup from 'reactjs-popup';
//

const ControlledRefPopup = () => {
  const ref = useRef();
  const openTooltip = () => ref.current.open();
  const closeTooltip = () => ref.current.close();
  const toggleTooltip = () => ref.current.toggle();

  return (
    <div>
      <button type="button" className="button" onClick={openTooltip}>
        open
      </button>
      <button type="button" className="button" onClick={closeTooltip}>
        close
      </button>

      <button type="button" className="button" onClick={toggleTooltip}>
        toggle
      </button>

      <Popup
        ref={ref}
        closeOnDocumentClick={false}
        trigger={
          <button type="button" className="button">
            I am the trigger
          </button>
        }
      >
        <div>Lorem ipsum dolor sit</div>
      </Popup>
    </div>
  );
};

export default Warper(ControlledRefPopup);
