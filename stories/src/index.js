import React from "react";
import Story from "./Story";
//import { Centred } from "../../src/utils/";
import { Centred } from "story-router";

import PopupElementStory from "./PopupElement";
import PopupFuncStory from "./PopupFunc";
import PopupInputFocusStory from "./PopupInputFocus";
import ModalStory from "./Modal";
import Menu from "./Menu";
import ControlledModal from "./ControlledModal";
import ControlledTooltip from "./ControlledTooltip";
import BoundedTooltip from "./BoundedTooltip";

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
    name: "Controlled Modal Component", // without props
    component: Centred(ControlledModal)
  },
  {
    name: "Controlled Tooltip Component", // without props
    component: Centred(ControlledTooltip)
  },
  {
    name: "Menu Component", // without props
    component: Centred(Menu)
  },
  {
    name: "Bounded Tooltip",
    component: Centred(BoundedTooltip),
    props: {
      style: { position: "absolute", top: 20, left: 20 },
      position: [
        "top left",
        "top center",
        "top right",
        "right top",
        "right center",
        "right bottom",
        "bottom left",
        "bottom center",
        "bottom right",
        "left top",
        "left center",
        "left bottom"
      ]
    }
  },
  ModalStory,
  PopupFuncStory,
  PopupInputFocusStory,
  PopupElementStory,
  CellTablePopupStory
];
