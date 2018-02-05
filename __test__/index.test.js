import React from "react";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Popup from "../src/Popup";
import { shallowToJson } from "enzyme-to-json";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const PopupTest = props => (
  <Popup {...props} trigger={<button> Trigger</button>}>
    popup content
  </Popup>
);
const PopupTestInput = props => (
  <Popup {...props} trigger={<input type="text" />}>
    popup content
  </Popup>
);
const PopupTriggerFunction = props => (
  <Popup
    {...props}
    trigger={open => <button>Button nested {open ? "open" : "close"}</button>}
  >
    popup content
  </Popup>
);
const PopupContentAsFunction = props => (
  <Popup {...props} trigger={<button> Trigger</button>}>
    {(close, open) => <div> Popup content {open ? "open" : "close"} </div>}
  </Popup>
);
test("it should render correctly ", () => {
  const popup = shallow(<PopupTest triggerOn="click" />);
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should render correctly on click  ", () => {
  const popup = mount(<PopupTest />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should render correctly on click (triggerOn = 'click') ", () => {
  const popup = mount(<PopupTest triggerOn="click" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should render correctly on hover (triggerOn = 'hover') ", () => {
  const popup = mount(<PopupTest triggerOn="hover" />);
  popup.find("button").simulate("mouseEnter");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should render correctly on hover (triggerOn = 'focus') ", () => {
  const popup = mount(<PopupTestInput triggerOn="focus" />);
  popup.find("input").simulate("focus");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

// trigger as function

test("it should render correctly on click and will update the trigger text  ", () => {
  const popup = mount(<PopupTriggerFunction />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

// content as function
test("it should render correctly on click and will update the the popup content text  ", () => {
  const popup = mount(<PopupContentAsFunction />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

// closeOnDocumentClick Tests PopupContentAsFunction

test("it shouldn't close on click outside popup ", () => {
  const popup = mount(<PopupTest triggerOn="click" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("div.popup-overlay").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should close on click outside popup (closeOnDocumentClick = true )", () => {
  const popup = mount(
    <PopupTest triggerOn="click" closeOnDocumentClick={true} />
  );
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("div.popup-overlay").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

// position Tests

test("it should rendered in the top left position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="top left" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the top center position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="top center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the top right position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="top right" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should rendered in the bottom left position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="bottom left" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the bottom center position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="bottom center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the bottom right position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="bottom right" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should rendered in the right top position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="right top" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the right center position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="right center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the right bottom position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="right bottom" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should rendered in the left top position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="left top" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the left center position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="left center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the left bottom position  ", () => {
  const popup = mount(<PopupTest triggerOn="click" position="left bottom" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
