import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Input from '.';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean', defaultValue: false },
    focusOnLoad: { control: 'boolean', defaultValue: false },
    className: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Preview: Story = {
  args: {
    placeholder: 'Placeholder',
  },
  decorators: [
    (Story) => {
      const [value, setValue] = useState<string>('');
      const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

      return <Story value={value} onChange={onChangeValue} />;
    },
  ],
};

export const WithRoot: Story = {
  decorators: [
    () => {
      const [value, setValue] = useState<string>('');
      const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

      return (
        <Input.Root>
          <Input.Label>Label</Input.Label>
          <Input.Hint>Hint</Input.Hint>
          <Input.Addon>https://</Input.Addon>
          <Input
            placeholder={'Placeholder'}
            value={value}
            onChange={onChangeValue}
          />
          <Input.Addon onClick={() => {}}>Submit</Input.Addon>
          <Input.Info>Some info about input field</Input.Info>
        </Input.Root>
      );
    },
  ],
};
