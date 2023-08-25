import { Label as PrimitiveLabel } from '@radix-ui/react-dropdown-menu';
import React from 'react';

import { merge } from '@/styles/utils';

const Label = React.forwardRef<
  React.ElementRef<typeof PrimitiveLabel>,
  React.ComponentPropsWithoutRef<typeof PrimitiveLabel> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <PrimitiveLabel
    ref={ref}
    className={merge(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));

Label.displayName = PrimitiveLabel.displayName || 'Label';
export default Label;
