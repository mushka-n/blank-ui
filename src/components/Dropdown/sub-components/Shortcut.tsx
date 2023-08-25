import React from 'react';

import { merge } from '@/styles/utils';

const Shortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={merge('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
};

Shortcut.displayName = 'Shortcut';
export default Shortcut;
