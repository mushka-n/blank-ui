import React from 'react';

import { merge } from '@/styles/utils';

import { LabelProps } from '../Input.props';

const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <span
      className={merge(
        `h-6 cursor-pointer select-none text-sm font-medium leading-normal text-neutral-900 dark:text-neutral-50`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Label.displayName = 'Input.Label';
export default Label;
