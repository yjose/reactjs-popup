import React from "react";
//import { withInfo } from "@storybook/addon-info";
//import { withReadme, withDocs } from "storybook-readme";
import Docs from "../../README.md";
console.log(Docs);
import { storiesOf } from "@storybook/react";
import styles from "../index.scss";
import Popup from "../Popup";
import withDocs from "../WithDocs";
const stories = storiesOf("Welcome ", module);
const input = "# This is a header\n\nAnd this is a paragraph";
const Yes = withDocs(Docs)(() => <div />);

stories.add("Welcome ", () => <Yes />);
