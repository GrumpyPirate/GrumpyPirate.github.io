import { ChildrenProps } from 'types/common';

export interface PageHeaderProps extends ChildrenProps {
  isFullscreen?: boolean;
  scrollLabel?: string;
  title: string;
}
