import React from 'react'
import Warper from './Warper'
import Popup from '../../../lib/reactjs-popup.es'
//

const InputFocus = () => (
  <Popup
    trigger={<input type="text" placeholder="start typing ... " />}
    on="focus"
    position="top center"
    closeOnDocumentClick
  >
    <span> On focus popup event </span>
  </Popup>
)

export default Warper(InputFocus)
