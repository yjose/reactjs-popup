import React from "react";
import { Centred } from "story-router";

import Popup from "../../src/";

const ModalProps = {
  defaultOpen: false,
  open: false,
  closeOnDocumentClick: true,
  closeOnEscape: true,
  on: ["click"],
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: "",
  position: "bottom center",
  lockScroll: false,
  arrow: true,
  offsetX: 0,
  offsetY: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100
};

const Modal = props => {
  return (
    <Popup {...props} trigger={<button>Button Trigger</button>}>
      <div>
        sum dolor sit amet consectetur adipisicing elit. Nemo voluptas ex,
        blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
        nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
        officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
        <Popup
          on="click"
          position="bottom left"
          closeOnDocumentClick={true}
          trigger={<button>Button nested</button>}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptas ex, blanditiis reiciendis dolor numquam pariatur facilis,
            labore, libero nihil asperiores ae facilis quis commodi dolores, at
            enim. Deserunt qui, officiis culpa optio numquam ullam pariatur
            voluptas tempora doloremque!
          </div>
        </Popup>
      </div>
    </Popup>
  );
};

const ModalStory = {
  name: "Modal example",
  component: Centred(Modal),
  props: ModalProps // adding props
};
export default ModalStory;
