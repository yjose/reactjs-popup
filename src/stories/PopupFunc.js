import React from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from "@storybook/addon-knobs";

import Popup from "../Popup";


export default () => {
    const labels = "Styles";
    const defaultValueStyles = {};

    const label = "trigger On";
    const options = {
      click: "click",
      hover: "hover"
    };
    const defaultValue = "click";
    const on = select(label, options, defaultValue);
    const label2 = "Position";
    const options2 = {
      "top left": "top left",
      "top center": "top center",
      "top right": "top right",
      "bottom left": "bottom left",
      "bottom center": "bottom center",
      "bottom right": "bottom right",
      "right top": "right top",
      "right center": "right center",
      "right bottom": "right bottom",
      "left top": "left top",
      "left center": "left center",
      "left bottom": "left bottom"
    };
    const defaultValue2 = "top center";
    const position = select(label2, options2, defaultValue2);
    const StylesValue = object(labels, defaultValueStyles);
    const closeOnDocumentClick = boolean("closeOnDocumentClick", true);

    return (
      <div>
        <div style={{ height: "500px" }}>tessttt</div>
        <div
          style={{ height: "100px", background: "red", position: "relative" }}
        >
          <Popup
            on={on}
            contentStyle={StylesValue}
            trigger={<button> Button 2</button>}
            closeOnDocumentClick={closeOnDocumentClick}
            position={position}
          >
            {(open, close) => (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                voluptas s lore Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nemo voluptas s loreLorem ipsum dolor sit amet
                consectetur adipisicing elit. Nemo voluptas s loreLorem ipsum
                dolor sit amet consectetur adipisicing elit. Nemo voluptas s
                lore
                <a className="close" onClick={close}>
                  &times;
                </a>{" "}
              </div>
            )}
          </Popup>
        </div>
      </div>
    );
  };
