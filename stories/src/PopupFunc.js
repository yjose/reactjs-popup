import React from "react";
import { Centred } from "story-router";

import Popup from "../../src/";

const PopupFuncProps = {
  on: "click",
  position: "top center",
  contentStyle: {}
};

const PopupFunc = props => (
  <div>
    <div style={{ height: "800px" }}> scroll to bottom :) </div>
    <div style={{ height: "100px", background: "red", position: "relative" }}>
      <Popup {...props} trigger={<button> Button 2</button>}>
        {close => (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptas s lore Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo voluptas s loreLorem ipsum dolor sit amet consectetur
            adipisicing elit. Nemo voluptas s loreLorem ipsum dolor sit amet
            consectetur adipisicing elit. Nemo voluptas s lore
            <a
              className="close"
              onClick={close}
              style={{ margin: "10px", background: "red" }}
            >
              close here &times;
            </a>{" "}
          </div>
        )}
      </Popup>
    </div>
  </div>
);

const PopupFuncStory = {
  name: "Popup function children",
  component: PopupFunc,
  props: PopupFuncProps
};

export default PopupFuncStory;
