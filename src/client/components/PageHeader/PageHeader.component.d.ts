import { ChildrenProps } from 'types';

interface PageHeaderProps extends ChildrenProps {
  isFullscreen?: boolean;
  scrollLabel?: string;
  title: string;
}

export { PageHeaderProps };
