import { PropsWithChildren } from 'react';

import { ClassNameProps } from 'types/common';

export type ButtonProps = ClassNameProps &
  PropsWithChildren<{
    to?: string;
    external?: boolean;
    primary?: boolean;
    secondary?: boolean;
  }>;
