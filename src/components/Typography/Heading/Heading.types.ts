import { PropsWithClassName } from 'types/common';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = PropsWithClassName<{
  className?: string;
  displayLevel?: HeadingLevel;
  level?: HeadingLevel;
  text: string;
}>;
