import { ClassNameProps } from 'types/common';

export interface HeadingProps extends ClassNameProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | number;
  text: string;
  displayLevel?: 1 | 2 | 3 | 4 | 5 | 6 | number;
  className?: string;
}