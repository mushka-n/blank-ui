import React, { createRef, useEffect } from 'react';

import { merge } from '@/styles/utils';

import InputProps from './Input.props';
import Addon from './sub-components/Addon';
import Hint from './sub-components/Hint';
import Info from './sub-components/Info';
import Label from './sub-components/Label';
import Root from './sub-components/Root';

const Input = ({
  className,
  value,
  onChange,
  focusOnLoad = false,
  ...props
}: InputProps) => {
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (focusOnLoad && inputRef?.current) inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      className={merge(
        `inline-flex h-9 appearance-none items-center justify-start rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-normal leading-normal text-neutral-900 outline-none transition-colors duration-200 ease-in-out placeholder:text-sm placeholder:font-normal placeholder:leading-normal placeholder:text-neutral-300 hover:border-neutral-400 focus:border-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-700 dark:hover:border-neutral-500 focus:dark:border-primary-500`,
        className
      )}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

Input.Root = Root;
Input.Label = Label;
Input.Hint = Hint;
Input.Addon = Addon;
Input.Info = Info;

export default Input;
