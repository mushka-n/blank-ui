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
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: React.ReactNode;
}
