import React, { ReactNode, useRef } from 'react';
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

const DelayContentModalTemplate: Story<PopupProps> = args => {
  const [timeRemainingInSeconds, setTimeRemainingInSeconds] = useState(-1);
  const [content, setContent] = useState<ReactNode>('');

  React.useEffect(() => {
    if (timeRemainingInSeconds > 0) {
      setContent(`Loading... ${timeRemainingInSeconds}`);
      setTimeout(() => {
        setTimeRemainingInSeconds(timeRemainingInSeconds - 1);
      }, 1000);
    } else if (timeRemainingInSeconds === 0) {
      setContent(
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
            id diam vel quam elementum. Nec sagittis aliquam malesuada bibendum
            arcu vitae. Id aliquet lectus proin nibh nisl condimentum. Egestas
            erat imperdiet sed euismod nisi porta. Aliquet nec ullamcorper sit
            amet risus nullam eget. Vulputate ut pharetra sit amet aliquam id.
            Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum.
            At imperdiet dui accumsan sit amet. In nulla posuere sollicitudin
            aliquam ultrices sagittis orci a. Enim neque volutpat ac tincidunt
            vitae semper quis.
          </p>
          <p>
            Lectus sit amet est placerat in egestas erat. Nibh cras pulvinar
            mattis nunc sed blandit. Varius duis at consectetur lorem. Aliquam
            sem fringilla ut morbi tincidunt. Nibh mauris cursus mattis molestie
            a iaculis at erat pellentesque. Enim ut sem viverra aliquet.
            Adipiscing diam donec adipiscing tristique. Adipiscing elit
            pellentesque habitant morbi tristique senectus et. Non diam
            phasellus vestibulum lorem sed risus ultricies tristique nulla. Eu
            consequat ac felis donec et.
          </p>
          <p>
            Vestibulum lectus mauris ultrices eros in cursus turpis massa. At
            augue eget arcu dictum varius duis. Vitae justo eget magna fermentum
            iaculis eu. Enim eu turpis egestas pretium aenean. In est ante in
            nibh. Diam in arcu cursus euismod quis. Imperdiet massa tincidunt
            nunc pulvinar sapien et ligula ullamcorper malesuada. Nulla aliquet
            enim tortor at auctor urna nunc id. Quis lectus nulla at volutpat
            diam ut venenatis tellus. Sem nulla pharetra diam sit.
          </p>
        </>
      );
    }
  }, [timeRemainingInSeconds]);

  const updateText = () => {
    setTimeRemainingInSeconds(3);
  };

  return (
    <Center>
      <Popup
        {...args}
        onOpen={() => updateText()}
        onClose={() => setContent('')}
      >
        {content}
      </Popup>
    </Center>
  );
};

export const DelayContentModal = DelayContentModalTemplate.bind({});

DelayContentModal.args = {
  trigger: <Button> click me </Button>,
  on: 'click',
  modal: true,
};
