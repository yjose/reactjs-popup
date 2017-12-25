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

import styles from "../src/index.scss";
import Popup from "../src/Popup";

import PopupElement from "./stories/PopupElement";
import PopupFunc from "./stories/PopupFunc";

//import Popup from "reactjs-popup";

// const stories = storiesOf('Storybook Knobs', module);
// stories.addDecorator(withKnobs);

storiesOf("Readme", module).add(
  "React Popup Componenet",
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      
      ~~~
    
    `)(() => {})
);

storiesOf("My Components", module)
  //.addDecorator((story, context) => withInfo("common info")(story)(context))
  .addDecorator(withKnobs)
  .add("Popup Simple", () => <PopupElement />)
  .add("Popup child function", () => <PopupFunc />)
  .add("Menu", () => (
    <div className="menu">
      <div className="menu-item"> item 1</div>
      <div className="menu-item"> item 2</div>
      <div className="menu-item"> item 3</div>
      <Popup
        trigger={<div className="menu-item"> Sub Menu</div>}
        closeOnDocumentClick={true}
        position="right,top"
      >
        <div className="menu">
          <Popup
            trigger={<div className="menu-item"> Sub Menu</div>}
            closeOnDocumentClick={true}
            position="right,top"
          >
            <div className="menu">
              <Popup
                trigger={<div className="menu-item"> Sub Menu</div>}
                closeOnDocumentClick={true}
                position="right,top"
              >
                <div className="menu">
                  <div className="menu-item"> item 1</div>
                  <div className="menu-item"> item 2</div>
                  <Popup
                    trigger={<div className="menu-item"> Sub Menu</div>}
                    closeOnDocumentClick={true}
                    position="right,top"
                  >
                    <div className="menu">
                      <div className="menu-item"> item 1</div>
                      <div className="menu-item"> item 2</div>
                      <div className="menu-item"> item 3</div>
                    </div>
                  </Popup>
                  <div className="menu-item"> item 3</div>
                </div>
              </Popup>
              <div className="menu-item"> item 1</div>
              <div className="menu-item"> item 2</div>
              <div className="menu-item"> item 3</div>
            </div>
          </Popup>
          <div className="menu-item"> item 1</div>
          <div className="menu-item"> item 2</div>
          <div className="menu-item"> item 3</div>
        </div>
      </Popup>
      <div className="menu-item"> item 4</div>
      <div className="menu-item"> item 5</div>
    </div>
  ));
