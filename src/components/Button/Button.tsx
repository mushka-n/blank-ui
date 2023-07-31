import React from 'react';

import { merge } from '@/styles/utils';

import ButtonProps from './Button.props';
import { getButtonSize, getButtonVariant } from './Button.styles';

const Button = ({
  id,
  className,
  size = 'medium',
  variant = 'primary',
  onClick,
  isDisabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={merge(
        `scale-font flex flex-row items-center justify-center gap-2 border border-solid border-transparent font-semibold transition duration-100 active:scale-[0.98]`,
        getButtonSize(size),
        getButtonVariant(variant),
        isDisabled &&
          'hover:bg-unset active:scale-1 cursor-not-allowed opacity-50',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
