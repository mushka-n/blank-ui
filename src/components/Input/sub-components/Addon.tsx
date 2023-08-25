import React from 'react';

import { merge } from '@/styles/utils';

import { AddonProps } from '../Input.props';

const Addon = ({ className, position, onClick, children }: AddonProps) => {
  const onClickAddon = (e: any) => {
    if (!onClick) return;
    e.preventDefault();
    onClick();
  };

  return (
    <div
      onClick={onClickAddon}
      className={merge(
        `inline-flex h-9 select-none items-center justify-start gap-2 border-b border-t border-neutral-300 bg-white px-3 py-1.5 text-center text-sm font-medium leading-normal text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500`,
        position === 'right' && `rounded-br-md rounded-tr-md border-r`,
        position === 'left' && `rounded-bl-md rounded-tl-md border-l`,
        onClick &&
          `scale-font cursor-pointer text-neutral-900 transition duration-100 ease-in-out hover:bg-neutral-100 active:scale-[0.98] dark:text-neutral-50 dark:hover:bg-neutral-700`,
        className
      )}
    >
      {children}
    </div>
  );
};

Addon.displayName = 'Input.Addon';
export default Addon;
