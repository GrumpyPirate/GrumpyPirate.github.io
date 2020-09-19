import { PropsWithChildren } from 'react';

import { ClassNameProps } from 'types/common';

export type PageHeaderProps = ClassNameProps &
  PropsWithChildren<{
    isFullscreen?: boolean;
    scrollLabel?: string;
    title: string;
  }>;
