import { PropsWithChildren } from 'react';

import { PropsWithClassName } from 'types/common';

export type ButtonProps = PropsWithClassName &
  PropsWithChildren<{
    to?: string;
    external?: boolean;
    primary?: boolean;
    secondary?: boolean;
  }>;
