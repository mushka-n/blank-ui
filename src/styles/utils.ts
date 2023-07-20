import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// enables tailwind intellisense and prettier sorting plugin
export const tw = (classes: TemplateStringsArray) => classes;

// merges multiple tailwind classes together
export const merge = (...classes: ClassValue[]) => twMerge(clsx(classes));
