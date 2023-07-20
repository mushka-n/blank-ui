import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    size: {
      options: ['extraSmall', 'small', 'medium', 'large', 'extraLarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'soft', 'ghost', 'danger', 'success'],
      control: { type: 'inline-radio' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Preview: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
  },
};
