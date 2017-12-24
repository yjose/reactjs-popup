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

test("it should render popup content correctly on click ", () => {
  const popup = mount(<PopupTest triggerOn="click" />);
  popup.find("button").simulate("click");
  expect(popup.find("div.popup-content").text()).toBe("popup content");
});

test("it should render popup content correctly on hover ", () => {
  const popup = mount(<PopupTest triggerOn="hover" />);
  popup.find("button").simulate("mouseEnter");
  expect(popup.find("div.popup-content").text()).toBe("popup content");
});

// closeOnDocumentClick Tests

test("it should close on click outside popup ", () => {
  const popup = mount(<PopupTest triggerOn="click" />);
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("div.overlay").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
test("it should close on click outside popup (closeOnDocumentClick = true )", () => {
  const popup = mount(
    <PopupTest triggerOn="click" closeOnDocumentClick={true} />
  );
  popup.find("button").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
  popup.find("div.overlay").simulate("click");
  expect(shallowToJson(popup)).toMatchSnapshot();
});
