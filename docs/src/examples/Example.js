import React from 'react'
import Popup from '../../../lib/reactjs-popup.es'
//

export default () => (
  <Popup trigger={<button> Trigger </button>} position="right center" closeOnDocumentClick>
    <div>
      skqdklsqjd dsfkjdsf dsf dkfjksldfj dskfjds fl dsfkjfs
      <Popup
        trigger={<button> testt </button>}
        position="right center"
        triggerOn="hover"
        style={{ padding: '5px' }}
      >
        <span> skqdklsqjd dsfkjdsf dsf dkfjksldfj dskfjds fl dsfkjfs</span>
      </Popup>
    </div>
  </Popup>
)
