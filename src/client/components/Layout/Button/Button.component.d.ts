import { ChildrenProps } from 'types';

interface ButtonProps extends ChildrenProps {
  to?: string;
  external?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export { ButtonProps };
