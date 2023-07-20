import React from 'react';

import { merge } from '@/styles/utils';

import { getButtonSize, getButtonVariant } from './Button.styles';
import ButtonProps from './Button.types';

const Button = ({
  className,
  size = 'medium',
  variant = 'primary',
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={merge(
        `scale-font flex flex-row items-center justify-center gap-2 border border-solid border-transparent font-semibold transition duration-100 active:scale-[0.98]`,
        getButtonSize(size),
        getButtonVariant(variant),
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
