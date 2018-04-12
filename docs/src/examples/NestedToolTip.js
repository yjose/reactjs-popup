import React from 'react'
import Warper from './Warper'
import Popup from '../../../lib/reactjs-popup.es'
//

const NestedToolTip = () => (
  <Popup
    trigger={<button className="button"> Trigger 1 </button>}
    position="top center"
    closeOnDocumentClick
  >
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor nulla animi, natus
      velit assumenda deserunt molestias
      <Popup
        trigger={<button className="button"> Trigger 2 </button>}
        position="bottom left"
        closeOnDocumentClick
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor nulla animi,
          natus velit assumenda deserunt
          <Popup
            trigger={<button className="button"> Trigger 3 </button>}
            position="top right"
            closeOnDocumentClick
          >
            <span> Popup content </span>
          </Popup>
        </div>
      </Popup>
    </div>
  </Popup>
)

export default Warper(NestedToolTip)
