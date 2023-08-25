import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Button from '../Button/Button';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Dropdown/Simple',
  tags: ['autodocs'],
  parameters: { controls: { sort: 'none' } },
  argTypes: {
    //Dropdown.Root
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.',
    },
    open: {
      control: 'boolean',
      description:
        'The controlled open state of the dropdown menu. Must be used in conjunction with onOpenChange.',
    },
    onOpenChange: {
      control: 'none',
      description:
        'Event handler called when the open state of the dropdown menu changes.',
    },
    modal: {
      control: 'boolean',
      description:
        'The modality of the dropdown menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.',
    },
    dir: {
      control: 'inline-radio',
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of submenus when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
    },

    //Dropdown.Content
    loop: {
      control: 'boolean',
      description:
        'When true, keyboard navigation will loop from last item to first, and vice versa.',
    },
    onCloseAutoFocus: {
      control: 'none',
      description:
        'Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.',
    },
    onEscapeKeyDown: {
      control: 'none',
      description:
        'Event handler called when the escape key is pressed.  It can be prevented by calling event.preventDefault',
    },
    onPointerDownOutside: {
      control: 'none',
      description:
        'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.',
    },
    onFocusOutside: {
      control: 'none',
      description:
        'Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.',
    },
    onInteractOutside: {
      control: 'none',
      description:
        'Event handler called when an interaction event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.',
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: 'inline-radio',
      description:
        'The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.',
    },
    sideOffset: {
      control: 'number',
      description:
        'The distance in pixels between the trigger and the rendered content.',
    },
    align: {
      options: ['start', 'center', 'end'],
      control: 'inline-radio',
      description:
        'The alignment of the rendered content relative to the trigger.',
    },
    alignOffset: {
      control: 'number',
      description:
        'The distance in pixels between the trigger and the rendered content.',
    },
    avoidCollisions: {
      control: 'boolean',
      description:
        'When true, overrides the side andalign preferences to prevent collisions with boundary edges.',
    },
    collisionBoundary: {
      control: 'none',
      description:
        'The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.',
    },
    collisionPadding: {
      control: 'number',
      description:
        'The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.',
    },
    arrowPadding: {
      control: 'number',
      description:
        'The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.',
    },
    sticky: {
      control: 'inline-radio',
      options: ['partial', 'always'],
      description:
        "The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless.",
    },
    hideWhenDetached: {
      control: 'boolean',
      description:
        'Whether to hide the content when the trigger becomes fully occluded.',
    },

    //Dropdown.Item
    items: { table: { disable: true } },

    //Dropdown.Trigger
    children: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Preview: Story = {
  args: {
    defaultOpen: false,
    open: undefined,
    onOpenChange: undefined,
    modal: false,
    dir: 'ltr',

    loop: false,
    onCloseAutoFocus: undefined,
    onEscapeKeyDown: undefined,
    onPointerDownOutside: undefined,
    onFocusOutside: undefined,
    onInteractOutside: undefined,
    side: 'bottom',
    sideOffset: 4,
    align: 'center',
    alignOffset: 0,
    avoidCollisions: true,
    collisionBoundary: [],
    collisionPadding: 0,
    arrowPadding: 0,
    sticky: 'partial',
    hideWhenDetached: false,

    items: [
      { label: 'Home', onClick: () => {} },
      { label: 'Profile', disabled: true },
      { label: '(Type "X")', textValue: 'x' },
    ],
  },
  render: (Story: any, context) => (
    <Dropdown {...context.args}>
      <Button variant='secondary'>Open</Button>
    </Dropdown>
  ),
};
