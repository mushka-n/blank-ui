import { SubContent as PrimitiveSubContent } from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { merge } from '@/styles/utils';

const SubContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveSubContent>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSubContent>
>(({ className, ...props }, ref) => (
  <PrimitiveSubContent
    ref={ref}
    className={merge(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-neutral-50 p-1 text-neutral-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
      data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
      data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
      data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 
      dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50`,
      className
    )}
    {...props}
  />
));

SubContent.displayName = PrimitiveSubContent.displayName || 'SubContent';
export default SubContent;
