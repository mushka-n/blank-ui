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

interface ButtonProps {
  className?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  children?: React.ReactNode;
}
export default ButtonProps;
