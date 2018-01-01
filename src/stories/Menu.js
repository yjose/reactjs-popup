import React from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import styles from "../index.scss";
import Popup from "../Popup";

storiesOf("React Popup", module).add("Popup Menu ", () => (
  <div className="menu">
    <div className="menu-item"> item 1</div>
    <div className="menu-item"> item 2</div>
    <div className="menu-item"> item 3</div>
    <Popup
      trigger={<div className="menu-item"> Sub Menu</div>}
      position="right,top"
      triggerOn="hover"
    >
      <div className="menu">
        <div className="menu-item"> item 1</div>
        <div className="menu-item"> item 2</div>
        <div className="menu-item"> item 3</div>
        <Popup
          trigger={<div className="menu-item"> Sub Menu</div>}
          position="right,top"
          triggerOn="hover"
        >
          <div className="menu">
            <div className="menu-item"> item 1</div>
            <div className="menu-item"> item 2</div>
            <Popup
              trigger={<div className="menu-item"> Sub Menu</div>}
              position="right,top"
              triggerOn="hover"
            >
              <div className="menu">
                <div className="menu-item"> item 1</div>
                <div className="menu-item"> item 2</div>
                <Popup
                  trigger={<div className="menu-item"> Sub Menu</div>}
                  position="right,top"
                  triggerOn="hover"
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
            <div className="menu-item"> item 3</div>
          </div>
        </Popup>
      </div>
    </Popup>
    <div className="menu-item"> item 4</div>
    <div className="menu-item"> item 5</div>
  </div>
));
