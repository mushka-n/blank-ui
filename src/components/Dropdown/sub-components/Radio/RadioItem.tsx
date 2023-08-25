import {
  ItemIndicator as PrimitiveItemIndicator,
  RadioItem as PrimitiveRadioItem,
} from '@radix-ui/react-dropdown-menu';
import { Circle } from 'lucide-react';
import React from 'react';

import { merge } from '@/styles/utils';

const RadioItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveRadioItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveRadioItem>
>(({ className, children, ...props }, ref) => (
  <PrimitiveRadioItem
    ref={ref}
    className={merge(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:cursor-pointer focus:bg-neutral-200 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <PrimitiveItemIndicator>
        <Circle className='h-2 w-2 fill-current' />
      </PrimitiveItemIndicator>
    </span>
    {children}
  </PrimitiveRadioItem>
));

RadioItem.displayName = PrimitiveRadioItem.displayName || 'RadioItem';
export default RadioItem;
