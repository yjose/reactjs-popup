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

//import styles from "../src/index.scss";
//import Popup from "../src/Popup";

import PopupElement from "./stories/PopupElement";
import PopupFunc from "./stories/PopupFunc";
import Modal from './stories/Modal';
import Menu from './stories/Menu';

storiesOf("React Popup", module).addDecorator(withKnobs)
.add("Popup Menu ", ()=> <Modal />)
.add("Popup Modal ", ()=> <Menu />)
.add("Popup PopupElement ", ()=> <PopupElement />)
.add("Popup PopupFunc ", ()=> <PopupFunc />)