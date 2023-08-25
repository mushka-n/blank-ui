import React from 'react';

import { merge } from '@/styles/utils';

import { HintProps } from '../Input.props';

const Hint = ({ className, children, ...props }: HintProps) => {
  return (
    <span
      className={merge(
        `h-6 text-sm font-normal leading-normal text-neutral-400 dark:text-neutral-500`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Hint.displayName = 'Input.Hint';
export default Hint;
