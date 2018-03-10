import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from "@storybook/addon-knobs";

import "./index.css";
//import Popup from "../src/Popup";

import PopupElement from "./stories/PopupElement";
import PopupFunc from "./stories/PopupFunc";
import PopupInputFocus from "./stories/PopupInputFocus";
import Modal from "./stories/Modal";
import Menu from "./stories/Menu";
import ControlledPopup from "./stories/Controlledpopup";

storiesOf("React Popup", module)
  .addDecorator(withKnobs)
  .add("simple tooltip  ", () => <PopupElement />)
  .add("function as child with scroll", () => <PopupFunc />)
  .add("on input focus ", () => <PopupInputFocus />)
  .add("Modal use case ", () => <Modal />)
  .add("Menu use case ", () => <Menu />)
  .add("Controlled Popup ", () => <ControlledPopup />);
