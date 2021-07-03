import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PopupProps } from '../src/types';
import { Popup } from '../src';
import { Button, Center } from './components';

import { useState } from '@storybook/addons';
import { POSITION_TYPES } from '../src/Utils';

export default {
  title: 'Example/Tooltip',
  component: Popup,
} as Meta;

const Template: Story<PopupProps> = args => (
  <Center>
    <Popup {...args}>Popup content Here</Popup>
  </Center>
);

export const SimpleTooltip = Template.bind({});

SimpleTooltip.args = {
  trigger: <button> Click Me </button>,
};

export const CenteredTextTooltip = Template.bind({});

CenteredTextTooltip.args = {
  trigger: <button> Click Me </button>,
  contentStyle: {textAlign: 'center'}
};

const PositionsTooltipTemplate: Story<PopupProps> = args => (
  <Center>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {POSITION_TYPES.map((position, i) => (
        <Popup
          key={`tooltip-${i}`}
          {...args}
          position={position}
          trigger={
            <button style={{ padding: 10, margin: 10 }}> {position}</button>
          }
        >
          <h5>Popup with {position} position </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            magni, quo, eligendi a aut ad iste in sit labore, porro id! Nostrum
            atque molestiae similique eveniet ex debitis quasi necessitatibus!
          </p>
        </Popup>
      ))}
    </div>
  </Center>
);

export const PositionsTooltip = PositionsTooltipTemplate.bind({});

PositionsTooltip.args = {
  //trigger: <button> click Me </button>,
  on: 'hover',
};

const TriggerAsFunTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup
      {...args}
      trigger={isOpen => (
        <Button> this should work {isOpen ? 'opened' : 'closed'} </Button>
      )}
    >
      Popup content Here
    </Popup>
  </Center>
);

export const TriggerAsFun = TriggerAsFunTemplate.bind({});

TriggerAsFun.args = {};

const MultipleTooltipTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup {...args} trigger={<Button> hover me </Button>}>
      Popup content Here
    </Popup>
    <Popup {...args}>Popup content Here</Popup>
    <Popup {...args}>Popup content Here</Popup>
  </Center>
);

export const MultipleTooltip = MultipleTooltipTemplate.bind({});

MultipleTooltip.args = {
  trigger: <Button> click me </Button>,
  on: 'click',
};

const NestedTooltipTemplate: Story<PopupProps> = args => (
  <Center>
    <Popup {...args} nested>
      Popup content Here
      <Popup {...args} nested>
        sqddsf
      </Popup>
      Popup content Here Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Ut commodi veniam sint maiores, quas ullam labore doloribus quia
      numquam excepturi corporis ad aut adipisci voluptate ea aperiam
      voluptatum, deleniti est.
    </Popup>
  </Center>
);

export const NestedTooltip = NestedTooltipTemplate.bind({});

NestedTooltip.args = {
  trigger: <Button> click Me </Button>,
  on: 'click',
  position: 'bottom center',
};

const ControlledTooltipTemplate: Story<PopupProps> = args => {
  const [open, setOpen] = useState(false);

  return (
    <Center>
      <Button onClick={() => setOpen(prv => !prv)}>I controlled tooltip</Button>
      <Popup {...args} open={open} onClose={close}>
        Popup content Here
      </Popup>
    </Center>
  );
};

export const ControlledTooltip = ControlledTooltipTemplate.bind({});

ControlledTooltip.args = {
  trigger: <button> click Me </button>,
  on: 'click',
};

const BoundedTooltipTemplate: Story<PopupProps> = args => {
  return (
    <Center>
      <div
        style={{
          background: 'red',
          height: '50%',
          width: '50%',
          padding: 1,
        }}
        className="popup-limit"
      >
        <Popup {...args}>Popup content Here</Popup>
      </div>
    </Center>
  );
};

export const BoundedTooltip = BoundedTooltipTemplate.bind({});

BoundedTooltip.args = {
  trigger: <button> click Me </button>,
  defaultOpen: true,
  on: 'click',
  keepTooltipInside: '.popup-limit',
  position: 'top center',
};

const TooltipEffectsTemplate: Story<PopupProps> = args => (
  <Center>
    <div onClick={() => console.log('I dont want to be called ')}>
      <Popup {...args}>Popup content Here</Popup>
    </div>
  </Center>
);

export const TooltipEffects = TooltipEffectsTemplate.bind({});

TooltipEffects.args = {
  trigger: <button> click Me </button>,
  onClose: () => alert('popup closed'),
  onOpen: () => alert('popup opened '),
};
