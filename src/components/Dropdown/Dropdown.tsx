import { Content as PrimitiveContent } from '@radix-ui/react-dropdown-menu';
import React from 'react';

import CheckboxItem from './sub-components/CheckboxItem';
import Content from './sub-components/Content';
import Group from './sub-components/Group';
import Item from './sub-components/Item';
import Label from './sub-components/Label';
import Portal from './sub-components/Portal';
import RadioGroup from './sub-components/Radio/RadioGroup';
import RadioItem from './sub-components/Radio/RadioItem';
import Root from './sub-components/Root';
import Separator from './sub-components/Separator';
import Shortcut from './sub-components/Shortcut';
import Sub from './sub-components/Sub/Sub';
import SubContent from './sub-components/Sub/SubContent';
import SubTrigger from './sub-components/Sub/SubTrigger';
import Trigger from './sub-components/Trigger';

interface DropdownProps
  extends React.ComponentPropsWithoutRef<typeof PrimitiveContent> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  dir?: 'ltr' | 'rtl';

  children: React.ReactNode;
  items: {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    textValue?: string;
  }[];
}

const Dropdown = ({
  defaultOpen,
  open,
  onOpenChange,
  modal = false,
  dir = 'ltr',

  children,
  items,

  ...props
}: DropdownProps) => (
  <Root
    open={open}
    modal={modal}
    onOpenChange={onOpenChange}
    dir={dir}
    defaultOpen={defaultOpen}
  >
    <Trigger asChild>{children}</Trigger>
    <Content {...props}>
      {items.map((item, index) => (
        <Item key={index} {...item}>
          {item.label}
        </Item>
      ))}
    </Content>
  </Root>
);

Dropdown.displayName = 'Dropdown';

Dropdown.Root = Root;
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Item = Item;
Dropdown.CheckboxItem = CheckboxItem;
Dropdown.RadioItem = RadioItem;
Dropdown.Label = Label;
Dropdown.Separator = Separator;
Dropdown.Shortcut = Shortcut;
Dropdown.Group = Group;
Dropdown.Portal = Portal;
Dropdown.Sub = Sub;
Dropdown.SubContent = SubContent;
Dropdown.SubTrigger = SubTrigger;
Dropdown.RadioGroup = RadioGroup;

export default Dropdown;
