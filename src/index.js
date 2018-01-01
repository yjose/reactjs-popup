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
  .add("Popup child function", () => <PopupFunc />);
