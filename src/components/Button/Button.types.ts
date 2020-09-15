import { PropsWithClassName } from 'types/common';

export type ButtonProps = PropsWithClassName & {
  to?: string;
  external?: boolean;
  primary?: boolean;
  secondary?: boolean;
};
