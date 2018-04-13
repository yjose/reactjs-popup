import React from "react";
import Story from "./Story";
//import { Centred } from "../../src/utils/";
import { Centred } from "story-router";

import PopupElementStory from "./PopupElement";
import PopupFuncStory from "./PopupFunc";
import PopupInputFocusStory from "./PopupInputFocus";
import ModalStory from "./Modal";
import Menu from "./Menu";
import ControlledPopup from "./Controlledpopup";
import CellTablePopupStory from "./CellTablePopup";

const storyProps = { text: "Parcel Storybook" };
const buttonProps = {
  name: "My Button",
  style: {
    margin: "10px",
    height: "30px",
    color: "black",
    background: "blue"
  }
};

export default [
  {
    name: "Story 1",
    component: Centred(Story),
    props: storyProps // adding props
  },
  {
    name: "without Prop", // without props
    component: Centred(() => <button>Test without props</button>)
  },
  {
    name: "Controlled Popup Component", // without props
    component: Centred(ControlledPopup)
  },
  {
    name: "Menu Component", // without props
    component: Centred(Menu)
  },
  ModalStory,
  PopupFuncStory,
  PopupInputFocusStory,
  PopupElementStory,
  CellTablePopupStory
];
