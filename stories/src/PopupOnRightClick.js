import React from 'react';
import {Centred} from 'story-router';
import Popup from '../../src';

const PopupRightClick = props => (
  <div>
    <Popup
      {...props}
      on="right-click"
      closeOnDocumentClick
      trigger={<button type="button">Right Click Me</button>}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
        ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
        nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
        officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
      </div>
    </Popup>
  </div>
);

const PopupOnRightClickStory = {
  name: 'Right Click Popup',
  component: Centred(PopupRightClick),
  props: {},
};

export default PopupOnRightClickStory;
