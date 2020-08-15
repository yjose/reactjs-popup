import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Thing, Props } from '../src';

export default {
  title: 'Example/Thing',
  component: Thing,
  argTypes: {
    title: { control: 'text' },
  },
} as Meta;

const Template: Story<Props> = args => <Thing {...args} />;

export const ThingD = Template.bind({});
ThingD.args = {
  title: 'Button',
};
