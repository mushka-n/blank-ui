import React from 'react';

import { merge } from '@/styles/utils';

import { InfoProps } from '../Input.props';

const Info = ({ className, children, ...props }: InfoProps) => {
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

Info.displayName = 'Input.Info';
export default Info;
