import React from 'react';
import {Centred} from 'story-router';

import Popup from '../../src';

const PopupHandleEventProps = {};

const PopupHandleEvent = props => (
  <div onClick={() => console.log("I don't want to be called")}>
    <Popup
      {...props}
      trigger={<button>Button Trigger</button>}
      onOpen={e => e.stopPropagation()}
      onClose={e => e.stopPropagation()}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        voluptas s lore Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nemo voluptas s loreLorem ipsum dolor sit amet consectetur
        adipisicing elit. Nemo voluptas s loreLorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo voluptas s lore
      </p>
    </Popup>
  </div>
);

const PopupFuncStory = {
  name: 'Popup Event Handling w/ onOpen & onClose',
  component: Centred(PopupHandleEvent),
  props: PopupHandleEventProps,
};

export default PopupFuncStory;
