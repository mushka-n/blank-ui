export interface RootProps {
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}

export interface LabelProps {
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}

export interface HintProps {
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}

export interface InfoProps {
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}

export interface AddonProps {
  className?: string;
  position?: 'left' | 'right';
  onClick?: () => void;
  children: React.ReactNode;
  [x: string]: any;
}

export default interface InputProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  focusOnLoad?: boolean;
  [x: string]: any;
}
