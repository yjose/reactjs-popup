/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Popup from "../../old-src";

const PopupFuncProps = {
  className: "test",
  arrowStyle: {},
  contentStyle: {},
  overlayStyle: {},
  on: "click",
};

const PopupStyle = (props) => (
  <div>
    <div style={{ height: "800px" }}> scroll to bottom :) </div>
    <div style={{ height: "100px", background: "red", position: "relative" }}>
      <Popup {...props} trigger={<button type="button"> Button 2</button>}>
        {(close) => (
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

const PopupStyleStory = {
  name: "Popup Style",
  component: PopupStyle,
  props: PopupFuncProps,
};

export default PopupStyleStory;
