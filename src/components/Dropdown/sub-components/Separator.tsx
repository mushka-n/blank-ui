import { Separator as PrimitiveSeparator } from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { merge } from '@/styles/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof PrimitiveSeparator>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSeparator>
>(({ className, ...props }, ref) => (
  <PrimitiveSeparator
    ref={ref}
    className={merge(
      '-mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-800',
      className
    )}
    {...props}
  />
));

Separator.displayName = PrimitiveSeparator.displayName || 'Separator';
export default Separator;
