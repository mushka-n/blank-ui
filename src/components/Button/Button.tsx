import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { merge } from '@/styles/utils';

import ButtonProps from './Button.props';
import { getButtonSize, getButtonVariant } from './Button.styles';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size = 'medium',
      variant = 'primary',
      isDisabled = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component
        ref={ref}
        className={merge(
          `scale-font flex flex-row items-center justify-center gap-2 border border-solid border-transparent font-semibold outline-none transition duration-100 active:scale-[0.98]`,
          getButtonSize(size),
          getButtonVariant(variant),
          isDisabled &&
            'hover:bg-unset active:scale-1 cursor-not-allowed opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
export default Button;
