import { Item as PrimitiveItem } from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { merge } from '@/styles/utils';

const Item = React.forwardRef<
  React.ElementRef<typeof PrimitiveItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveItem> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <PrimitiveItem
    ref={ref}
    className={merge(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:cursor-pointer focus:bg-neutral-200 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-neutral-50 dark:focus:bg-neutral-800',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));

Item.displayName = PrimitiveItem.displayName || 'Item';
export default Item;
