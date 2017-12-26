import React from "react";
import { withInfo } from "@storybook/addon-info";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Popup from "../Popup";

storiesOf("React Popup js", module)
  //.addDecorator((story, context) => withInfo("common info")(story)(context))
  .addDecorator(withKnobs)
  .add("Popup function ", () => {
    const labels = "Styles";
    const defaultValueStyles = {};

    const label = "trigger On";
    const options = {
      click: "click",
      hover: "hover"
    };
    const defaultValue = "click";
    const triggerOn = select(label, options, defaultValue);
    const label2 = "Position";
    const options2 = {
      "top,left": "top,left",
      "top,center": "top,center",
      "top,right": "top,right",
      "bottom,left": "bottom,left",
      "bottom,center": "bottom,center",
      "bottom,right": "bottom,right",
      "right,top": "right,top",
      "right,center": "right,center",
      "right,bottom": "right,bottom",
      "left,top": "left,top",
      "left,center": "left,center",
      "left,bottom": "left,bottom"
    };
    const defaultValue2 = "top,left";
    const position = select(label2, options2, defaultValue2);
    const StylesValue = object(labels, defaultValueStyles);
    const closeOnDocumentClick = boolean("closeOnDocumentClick", true);

    return (
      <div>
        <Popup
          triggerOn={triggerOn}
          style={StylesValue}
          trigger={
            <button
              style={{ position: "absolute", top: "100px", left: "300px" }}
            >
              {" "}
              Button 2
            </button>
          }
          closeOnDocumentClick={closeOnDocumentClick}
          position={position}
        >
          {(open, close) => (
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              voluptas s{" "}
              <a className="close" onClick={close}>
                &times;
              </a>{" "}
            </div>
          )}
        </Popup>
      </div>
    );
  });
