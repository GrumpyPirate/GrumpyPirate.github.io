import { ClassNameProps } from 'types/common';

export type LineupItemType = 'desktop' | 'tablet' | 'mobile';

export interface LineupItemData {
  key: number;
  type: LineupItemType;
  frameSrc: string;
  imageSrc: string;
}

export interface PortfolioDeviceLineupProps extends ClassNameProps {
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
}
