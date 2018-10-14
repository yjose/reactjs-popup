import React from "react";
import { Centred } from "story-router";
import Popup from "../../src/";
const PopupInputFocus = props => (
  <div>
    <Popup
      {...props}
      on="click"
      closeOnDocumentClick={true}
      trigger={<input type="text" placeholder=" try it ...." />}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
        ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
        nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
        officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
      </div>
    </Popup>
  </div>
);

const PopupInputFocusStory = {
  name: "Input focus Popup",
  component: Centred(PopupInputFocus),
  props: {}
};

export default PopupInputFocusStory;
