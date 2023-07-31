export type ButtonSize =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'soft'
  | 'ghost'
  | 'danger'
  | 'success';

export default interface ButtonProps {
  id: string;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
  isDisabled: boolean;
  children: React.ReactNode;
}
