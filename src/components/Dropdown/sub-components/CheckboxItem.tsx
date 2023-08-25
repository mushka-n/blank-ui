import {
  CheckboxItem as PrimitiveCheckboxItem,
  ItemIndicator as PrimitiveItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import { Check } from 'lucide-react';
import React from 'react';

import { merge } from '@/styles/utils';

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveCheckboxItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveCheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <PrimitiveCheckboxItem
    ref={ref}
    className={merge(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:cursor-pointer focus:bg-neutral-200 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <PrimitiveItemIndicator>
        <Check className='h-4 w-4' />
      </PrimitiveItemIndicator>
    </span>
    {children}
  </PrimitiveCheckboxItem>
));

CheckboxItem.displayName = PrimitiveCheckboxItem.displayName || 'CheckboxItem';
export default CheckboxItem;
