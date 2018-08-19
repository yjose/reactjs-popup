import React from 'react';
import Warper from './Warper';
import Popup from '../../../lib/reactjs-popup.es';

const BoundedTooltip = () => (
  <div
    style={{ height: 200, width: 400, border: '1px solid #ccc' }}
    className={'tooltipBoundary'}
  >
    <Popup
      trigger={<button className="button"> Trigger 1 </button>}
      position={['top center', 'bottom right', 'bottom left']}
      closeOnDocumentClick
      keepTooltipInside=".tooltipBoundary"
    />
  </div>
)

export default Warper(BoundedTooltip)
