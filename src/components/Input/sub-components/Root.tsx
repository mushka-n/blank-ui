import React, { createRef, useEffect, useState } from 'react';

import { merge } from '@/styles/utils';

import { RootProps } from '../Input.props';
import useParseInputChildren from '../hooks/useInputParseChildren';

const Root = ({ className, children, ...props }: RootProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const parsedChildren = useParseInputChildren(children);
  const { Label, Hint, AddonLead, AddonTrail, Input, Info } = parsedChildren;

  const inputClassName = Input.props.className;
  const InputProps = { ...Input.props };
  delete InputProps.className;

  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  useEffect(() => {
    if (Input?.props.focusOnLoad && inputRef?.current) inputRef.current.focus();
  }, []);

  return (
    <label className={merge(`flex flex-col gap-2`, className)} {...props}>
      {(Label || Hint) && (
        <div className='flex flex-row justify-between gap-2'>
          {[Label, Hint]}
        </div>
      )}

      <div className={`inline-flex h-9 items-center justify-start`}>
        {AddonLead}
        {Input && (
          <div
            className={merge(
              `inline-flex h-9 cursor-text items-center justify-start border border-neutral-300 bg-white px-3 py-1.5 text-sm font-normal leading-normal text-neutral-900 transition-colors duration-200 ease-in-out hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:border-neutral-500`,
              !AddonLead && `rounded-l-md `,
              !AddonTrail && `rounded-r-md `,
              isFocus &&
                `border-primary-500 hover:border-primary-500 dark:border-primary-500 dark:hover:border-primary-500`,
              inputClassName
            )}
          >
            <input
              className={merge(
                `h-full appearance-none bg-transparent outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-700`
              )}
              value={Input.props.value}
              onChange={Input.props.onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              {...InputProps}
            />
          </div>
        )}
        {AddonTrail}
      </div>

      {Info}
    </label>
  );
};

Root.displayName = 'Input.Root';
export default Root;
