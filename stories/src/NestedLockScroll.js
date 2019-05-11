import React from 'react';
import {Centred} from 'story-router';

import Popup from '../../src';

const NestedLockScrollProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  on: ['click'],
  position: 'bottom center',
  arrow: true,
  offsetX: 0,
  offsetY: 0,
};

const NestedLockScroll = props => {
  return (
    <div style={{height: '200vh', position: 'relative', textAlign: 'center'}}>
      <div>Try to scroll down before pressing the button.</div>
      <Popup {...props} trigger={<button>Button Trigger</button>}>
        {close => (
          <div>
            sum dolor sit amet consectetur adipisicing elit. Nemo voluptas ex,
            blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
            nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt
            qui, officiis culpa optio numquam ullam pariatur voluptas tempora
            doloremque!
            <Popup
              on="click"
              position="bottom left"
              closeOnDocumentClick
              modal
              lockScroll
              trigger={<button>Button nested</button>}
              onClose={close}>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                voluptas ex, blanditiis reiciendis dolor numquam pariatur
                facilis, labore, libero nihil asperiores ae facilis quis commodi
                dolores, at enim. Deserunt qui, officiis culpa optio numquam
                ullam pariatur voluptas tempora doloremque!
              </div>
            </Popup>
          </div>
        )}
      </Popup>
      <div style={{position: 'absolute', bottom: 0}}>
        Can you still scroll to me?
      </div>
    </div>
  );
};

const NestedLockScrollStory = {
  name: 'Nested lock scroll',
  component: Centred(NestedLockScroll),
  props: NestedLockScrollProps, // adding props
};
export default NestedLockScrollStory;
