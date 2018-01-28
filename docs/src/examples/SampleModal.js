import React from 'react'
import Warper from './Warper'
import Popup from '../../../lib/reactjsPopup.es'
//

const SampleModal = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal closeOnDocumentClick>
    <span> Modal content </span>
  </Popup>
)

export default Warper(SampleModal)
