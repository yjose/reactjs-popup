import React from 'react'
import Popup from '/media/disk2/Work/my_react/reactjs-popup/lib/'
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
