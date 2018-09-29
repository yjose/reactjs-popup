import React from "react";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Popup from "../src/";
import { shallowToJson } from "enzyme-to-json";
import { cleanup, fireEvent, render, waitForElement } from "react-testing-library";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const PopupTest = props => (
  <Popup {...props} trigger={<button> Trigger</button>}>
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

afterEach(() => cleanup());

test("it should render correctly ", () => {
  const popup = shallow(<PopupTest on="click" />);
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should render correctly on click  ", () => {
  const { getByText } = render(<PopupTest />);
  fireEvent.click(getByText("Trigger"));
  expect(getByText("popup content")).toBeDefined();
});

test("it should render correctly on click (on = 'click') ", () => {
  const { getByText } = render(<PopupTest on="click"/>);
  fireEvent.click(getByText("Trigger"));
  expect(getByText("popup content")).toBeDefined();
});

test("it should render correctly on hover (on = 'hover') ", async () => {
  const { getByText } = render(<PopupTest on="hover" />);
  fireEvent.mouseOver(getByText("Trigger"));
  await waitForElement(() => getByText("popup content"));
});
test("it should not render on hover (on = 'focus') ", async () => {
  const { getByText, queryByText } = render(<PopupTest on="focus" />);
  fireEvent.mouseOver(getByText("Trigger"));
  expect(queryByText("popup content")).toBeNull();
});

test("it should not render on focus (on = 'hover') ", () => {
  const { getByText, queryByText } = render(<PopupTest on="hover" />);
  fireEvent.focus(getByText("Trigger"));
  expect(queryByText("popup content")).toBeNull();
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
  const popup = mount(<PopupTest on="click" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("div.popup-overlay").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should close on click outside popup (closeOnDocumentClick = true )", () => {
  const popup = mount(
    <PopupTest on="click" closeOnDocumentClick={true} />
  );
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("div.popup-overlay").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

// position Tests

test("it should rendered in the top left position  ", () => {
  const popup = mount(<PopupTest on="click" position="top left" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the top center position  ", () => {
  const popup = mount(<PopupTest on="click" position="top center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the top right position  ", () => {
  const popup = mount(<PopupTest on="click" position="top right" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should rendered in the bottom left position  ", () => {
  const popup = mount(<PopupTest on="click" position="bottom left" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the bottom center position  ", () => {
  const popup = mount(<PopupTest on="click" position="bottom center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the bottom right position  ", () => {
  const popup = mount(<PopupTest on="click" position="bottom right" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should rendered in the right top position  ", () => {
  const popup = mount(<PopupTest on="click" position="right top" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the right center position  ", () => {
  const popup = mount(<PopupTest on="click" position="right center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the right bottom position  ", () => {
  const popup = mount(<PopupTest on="click" position="right bottom" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});

test("it should rendered in the left top position  ", () => {
  const popup = mount(<PopupTest on="click" position="left top" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the left center position  ", () => {
  const popup = mount(<PopupTest on="click" position="left center" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should rendered in the left bottom position  ", () => {
  const popup = mount(<PopupTest on="click" position="left bottom" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
