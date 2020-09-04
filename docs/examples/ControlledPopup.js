import React, { useState } from 'react';
import Warper from './Warper';
import Popup from 'reactjs-popup';
//

const ControlledPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia,
          voluptate ea, accusamus excepturi deleniti ratione sapiente!
          Laudantium, aperiam doloribus. Odit, aut.
        </div>
      </Popup>
    </div>
  );
};

export default Warper(ControlledPopup);
