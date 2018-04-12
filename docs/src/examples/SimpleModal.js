import React from 'react'
import Warper from './Warper'
import Popup from '../../../lib/reactjs-popup.es'
//

const SimpleModal = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal closeOnDocumentClick>
    <span> Modal content </span>
  </Popup>
)

export default Warper(SimpleModal)
