import { tw } from '@/styles/utils';

import { ButtonSize, ButtonVariant } from './Button.types';

export const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'extraSmall':
      return tw`h-6 rounded px-2 py-1 text-xs leading-4`;
    case 'small':
      return tw`h-7 rounded-md px-2 py-1 text-sm leading-5`;
    case 'medium':
      return tw`h-8 gap-1.5 rounded-md px-2.5 py-1.5 text-sm leading-5`;
    case 'large':
      return tw`h-9 gap-2 rounded-md px-3 py-2 text-sm leading-5`;
    case 'extraLarge':
      return tw`h-10 gap-2 rounded-md px-3.5 py-2.5 text-sm leading-5`;
  }
};

export const getButtonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return tw`bg-primary-500 text-neutral-50 shadow-sm hover:bg-primary-400`;
    case 'secondary':
      return tw`border-neutral-200 bg-white text-neutral-900 shadow-sm hover:bg-neutral-50
                dark:border-transparent dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700`;
    case 'soft':
      return tw`bg-primary-50 text-primary-500 hover:bg-primary-100 hover:text-primary-600
                dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-primary-400`;
    case 'ghost':
      return tw`bg-transparent text-neutral-900 hover:bg-neutral-100
                dark:text-neutral-50 dark:hover:bg-neutral-800`;
    case 'danger':
      return tw`bg-red-500 text-neutral-50 shadow-sm hover:bg-red-400
                dark:bg-red-800 dark:hover:bg-red-700`;
    case 'success':
      return tw`bg-green-500 text-neutral-50 shadow-sm hover:bg-green-400 
                dark:bg-green-800 dark:hover:bg-green-700 `;
  }
};
