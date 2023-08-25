import {
  Content as PrimitiveContent,
  Portal as PrimitivePortal,
} from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { merge } from '@/styles/utils';

const Content = React.forwardRef<
  React.ElementRef<typeof PrimitiveContent>,
  React.ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <PrimitivePortal>
    <PrimitiveContent
      ref={ref}
      sideOffset={sideOffset}
      className={merge(
        `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-neutral-50 p-1 text-neutral-900 shadow-md data-[state=open]:animate-in 
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0 
        data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 
        data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-700 
        dark:bg-neutral-900 dark:text-neutral-50`,
        className
      )}
      {...props}
    />
  </PrimitivePortal>
));

Content.displayName = PrimitiveContent.displayName || 'Content';
export default Content;
