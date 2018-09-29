import React from "react";
import Popup from "../../src/";
import { Centred } from "story-router";

const Button = props => (
  <button {...props}>
    {" "}
    Button nested with offsetX
    {props.open ? "open" : "close"}{" "}
  </button>
);

const PopupElement = props => (
  <div>
    <div style={{ zIndex: "90" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas s
      <Popup trigger={open => <Button open={open} />} {...props}>
        {close => <Content close={close} />}
      </Popup>
    </div>

    <div style={{ zIndex: "90" }}>
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas ex,
      blanditiis reiciendis dolor numquam pariatur facilis, labore, libero nihil
      asperiores ae facilis{" "}
    </div>
  </div>
);

const Content = ({ close }) => (
  <div>
    sum dolor sit amet consectetur adipisicing elit. Nemo voluptas ex,
    blanditiis reiciendir voluptas tempora doloremque!{" "}
    <button onClick={close}>close</button>
    <Popup
      on={["click"]}
      position={"bottom left"}
      closeOnDocumentClick={true}
      trigger={<button>Button nested</button>}
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

const PopupElementStory = {
  name: "Popup trigger function",
  component: Centred(PopupElement),
  props: {
    offsetX: 0,
    offsetY: 0,
    position: "top left"
  }
};

export default PopupElementStory;
