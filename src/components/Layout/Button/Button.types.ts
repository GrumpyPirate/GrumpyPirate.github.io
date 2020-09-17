import { ChildrenProps } from 'types/common';

export interface ButtonProps extends ChildrenProps {
  to?: string;
  external?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
