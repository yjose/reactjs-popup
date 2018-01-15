import React from 'react'
import Popup from 'reactjs-popup'
//

export default () => (
  <Popup trigger={<button> testt </button>} position="right center" closeOnDocumentClick>
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
