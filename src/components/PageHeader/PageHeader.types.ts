import { PropsWithChildren } from 'react';

import { PropsWithClassName } from 'types/common';

export type PageHeaderProps = PropsWithClassName &
  PropsWithChildren<{
    isFullscreen?: boolean;
    scrollLabel?: string;
    title: string;
  }>;
