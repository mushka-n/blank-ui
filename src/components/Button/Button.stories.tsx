import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['extraSmall', 'small', 'medium', 'large', 'extraLarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'soft', 'ghost', 'danger', 'success'],
      control: { type: 'inline-radio' },
    },
    isDisabled: { control: 'boolean' },

    id: { table: { disable: true } },
    className: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Preview: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
    isDisabled: false,
  },
  decorators: [
    (Story: any) => {
      const onClick = () => console.log('Clicked!');
      return <Story onClick={onClick} />;
    },
  ],
};
