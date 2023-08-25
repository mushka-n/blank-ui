import { SubTrigger as PrimitiveSubTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import React from 'react';

import { merge } from '@/styles/utils';

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof PrimitiveSubTrigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <PrimitiveSubTrigger
    ref={ref}
    className={merge(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-200 data-[state=open]:bg-neutral-200 dark:focus:bg-neutral-800 dark:data-[state=open]:bg-neutral-800',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className='ml-auto h-4 w-4' />
  </PrimitiveSubTrigger>
));

SubTrigger.displayName = PrimitiveSubTrigger.displayName || 'SubTrigger';
export default SubTrigger;
