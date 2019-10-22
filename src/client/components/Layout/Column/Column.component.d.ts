import { ChildrenProps } from 'types';

interface ColumnProps extends ChildrenProps {
  span?: 'auto' | number;
  spanSM?: 'auto' | number;
  spanMD?: 'auto' | number;
  spanLG?: 'auto' | number;
  spanXL?: 'auto' | number;
  push?: number;
  pushSM?: number;
  pushMD?: number;
  pushLG?: number;
  pushXL?: number;
  pull?: number;
  pullSM?: number;
  pullMD?: number;
  pullLG?: number;
  pullXL?: number;
}

export { ColumnProps };
