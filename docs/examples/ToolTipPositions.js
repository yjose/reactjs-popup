import React from 'react';
import Popup from 'reactjs-popup';
//

const POSITION_TYPES = [
  'top left',
  'top center',
  'top right',
  'right top',
  'right center',
  'right bottom',
  'bottom left',
  'bottom center',
  'bottom right',
  'left top',
  'left center',
  'left bottom',
  'center center',
];

const ToolTipPositions = () => (
  <div className="example-warper">
    {POSITION_TYPES.map((position, i) => (
      <Popup
        key={`tp-${i}`}
        trigger={
          <button type="button" className="button">
            {position}
          </button>
        }
        position={position}
        on={['hover', 'focus']}
        arrow={position !== 'center center'}
      >
        <Card title={position} />
      </Popup>
    ))}
  </div>
);
const Card = ({ title }) => (
  <div className="popup-card">
    <div className="header">{title} position </div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod dolor cupiditate
    </div>
  </div>
);

export default ToolTipPositions;
