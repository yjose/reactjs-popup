import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PopupProps } from '../src/types';
import { Popup } from '../src';
import { PopupActions } from '../src/types';
import { Button, Center, Content } from './components';
import { useState } from '@storybook/addons';
// import './animations.css';
import '../src/index.css';

export default {
  title: 'Example/Modal',
  component: Popup,
} as Meta;

const Template: Story<PopupProps> = args => (
  <Center>
    <Popup {...args}>Modal content Here</Popup>
  </Center>
);

export const SimpleModal = Template.bind({});

SimpleModal.args = {
  trigger: <button> click Me </button>,
  modal: true,
};

const ContentAsFunTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup
      {...args}
      trigger={isOpen => (
        <Button> this should work {isOpen ? 'opened' : 'closed'} </Button>
      )}
    >
      {(close: Function) => (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          suscipit iusto necessitatibus ipsam. Nostrum recusandae ea quis quidem
          dicta eum, iste minus. Placeat, commodi error laboriosam aperiam odit
          culpa aliquam!
          <button onClick={() => close()}> close modal </button>
        </div>
      )}
    </Popup>
  </Center>
);

export const ContentAsFun = ContentAsFunTemplate.bind({});

ContentAsFun.args = {
  modal: true,
};

const MultipleModalTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup {...args}>Modal content Here</Popup>
    <Popup {...args}>Modal content Here</Popup>
  </Center>
);

export const MultipleModal = MultipleModalTemplate.bind({});

MultipleModal.args = {
  trigger: <Button> click me </Button>,
  on: 'click',
  modal: true,
};

const MultipleModalAccessibilityTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup {...args}>
      <Content>
        <button> 1</button>
        <button> 2</button>
        <button> 3</button>
      </Content>
    </Popup>
    <Popup {...args}>
      <Content>
        <button> 1</button>
        <button> 2</button>
        <button> 3</button>
      </Content>
    </Popup>
  </Center>
);

export const MultipleModalAccessibility = MultipleModalAccessibilityTemplate.bind(
  {}
);

MultipleModalAccessibility.args = {
  trigger: <Button> click me </Button>,
  on: 'click',
  modal: true,
};

const NestedModalTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup {...args} nested>
      Popup content Here
      <Popup {...args} nested>
        this a tooltip
        <Popup {...args} modal={false}>
          tooltip content
        </Popup>
      </Popup>
      Popup content Here Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Ut commodi veniam sint maiores, quas ullam labore doloribus quia
      numquam excepturi corporis ad aut adipisci voluptate ea aperiam
      voluptatum, deleniti est.
    </Popup>
  </Center>
);

export const NestedModal = NestedModalTemplate.bind({});

NestedModal.args = {
  trigger: <Button> click Me </Button>,
  modal: true,
};

const ControlledModalTemplate: Story<PopupProps> = args => {
  const [open, setOpen] = useState(true);

  return (
    <Center>
      <Button onClick={() => setOpen(prv => !prv)}>I controlled Modal</Button>
      <Popup {...args} open={open} onClose={() => setOpen(false)} lockScroll>
        Popup content Here
      </Popup>
    </Center>
  );
};

export const ControlledModal = ControlledModalTemplate.bind({});

ControlledModal.args = {};

const ModalEffectsTemplate: Story<PopupProps> = args => (
  <Center>
    <div onClick={() => console.log('I dont want to be called ')}>
      <Popup {...args}>Popup content Here</Popup>
    </div>
  </Center>
);

export const ModalEffects = ModalEffectsTemplate.bind({});

ModalEffects.args = {
  trigger: <button> click Me </button>,
  onClose: () => alert('popup closed'),
  onOpen: () => alert('popup opened '),
  modal: true,
};

const GlobalModalWithRefTemplate: Story<PopupProps> = args => {
  const popupRef = useRef<PopupActions>(null);

  return (
    <Center>
      <button onClick={() => popupRef?.current?.open()}> Open Modal </button>
      <button onClick={() => popupRef?.current?.close()}> Close Modal </button>
      <button onClick={() => popupRef?.current?.toggle()}>Toggle Modal</button>
      <Popup {...args} ref={popupRef}>
        Popup content Here
      </Popup>
    </Center>
  );
};

export const GlobalModalWithRef = GlobalModalWithRefTemplate.bind({});

GlobalModalWithRef.args = {
  onClose: () => alert('popup closed'),
  onOpen: () => alert('popup opened '),
  modal: true,
};

const DisabledAutofocusOnFirstElementTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup
      {...args}
      trigger={<Button>Open modal</Button>}
    >
      <input placeholder='Start type'/>
    </Popup>
  </Center>
);

export const DisabledAutofocusOnFirstElement = DisabledAutofocusOnFirstElementTemplate.bind({});

DisabledAutofocusOnFirstElement.args = {
  modal: true,
  disabledAutofocus: true
};