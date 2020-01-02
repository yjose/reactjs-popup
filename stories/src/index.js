import React from 'react';
import {Centred} from 'story-router';
import Story from './Story';
import Popup from '../../src';
import PopupElementStory from './PopupElement';
import PopupFuncStory from './PopupFunc';
import PopupInputFocusStory from './PopupInputFocus';
import DisabledTooltip from './DisabledTooltip';
import ModalStory from './Modal';
import Menu from './Menu';
import ControlledModal from './ControlledModal';
import ControlledTooltip from './ControlledTooltip';
import BoundedTooltip from './BoundedTooltip';
import PopupStyle from './PopupStyle';
import ModalTimeout from './Modal-timeout';

import CellTablePopupStory from './CellTablePopup';

import PopupHandleEventStory from './PopupHandleEvent';

import NestedLockScrollStory from './NestedLockScroll';

const storyProps = {text: 'Parcel Storybook'};
const buttonProps = {
  name: 'My Button',
  style: {
    margin: '10px',
    height: '30px',
    color: 'black',
    background: 'blue',
  },
};

export default [
  {
    name: 'Story 1',
    component: Centred(Story),
    props: storyProps, // adding props
  },
  {
    name: 'without Prop', // without props
    component: Centred(() => (
      <Popup trigger={<button> trigger</button>}> content</Popup>
    )),
  },
  {
    name: 'Controlled Modal Component', // without props
    component: Centred(ControlledModal),
  },
  {
    name: 'Controlled Tooltip Component', // without props
    component: Centred(ControlledTooltip),
  },
  {
    name: 'Disabled Tooltip Component', // without props
    component: Centred(DisabledTooltip),
  },
  {
    name: 'Menu Component', // without props
    component: Centred(Menu),
  },
  {
    name: 'Bounded Tooltip',
    component: Centred(BoundedTooltip),
    props: {
      style: {position: 'absolute', top: 20, left: 20},
      position: [
        'top left',
        'top center',
        'top right',
        'right top',
        'right center',
        'right bottom',
        'bottom left',
        'bottom center',
        'bottom right',
        'left top',
        'left center',
        'left bottom',
      ],
    },
  },
  ModalStory,
  ModalTimeout,
  PopupFuncStory,
  PopupInputFocusStory,
  PopupElementStory,
  CellTablePopupStory,
  PopupHandleEventStory,
  NestedLockScrollStory,
  PopupStyle,
];
