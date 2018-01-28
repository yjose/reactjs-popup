import React from 'react'
import Warper from './Warper'
import Popup from '../../../lib/reactjsPopup.es'
//

const SimpleTooltip = () => (
  <Popup
    trigger={<button className="button"> Trigger </button>}
    position="right center"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup>
)

export default Warper(SimpleTooltip)
