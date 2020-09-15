import { PropsWithClassName } from 'types/common';

export type LineupItemType = 'desktop' | 'tablet' | 'mobile';

export interface LineupItemData {
  key: number;
  type: LineupItemType;
  frameSrc: string;
  imageSrc: string;
}

export type PortfolioDeviceLineupProps = PropsWithClassName<{
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
}>;
