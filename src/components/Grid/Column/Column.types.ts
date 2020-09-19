import { PropsWithChildren } from 'react';

export interface ColumnProps extends PropsWithChildren<{}> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  smDown?: number;
  mdDown?: number;
  lgDown?: number;
  xlDown?: number;
  xsOnly?: number;
  smOnly?: number;
  mdOnly?: number;
  lgOnly?: number;
  xlOnly?: number;
  push?: number;
  pushXs?: number;
  pushSm?: number;
  pushMd?: number;
  pushLg?: number;
  pushXl?: number;
  pushXxl?: number;
  pull?: number;
  pullXs?: number;
  pullSm?: number;
  pullMd?: number;
  pullLg?: number;
  pullXl?: number;
  pullXxl?: number;
}
