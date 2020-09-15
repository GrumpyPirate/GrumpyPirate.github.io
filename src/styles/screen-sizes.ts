export type ScreenSizeVariant =
  | 'largeMobileMin'
  | 'tabletMin'
  | 'desktopLgMin'
  | 'desktopXlMin'
  | 'desktopXxlMin';

export type ScreenSizeCollection = {
  [key in ScreenSizeVariant]: number;
};

export const screenSizes: ScreenSizeCollection = {
  largeMobileMin: 480,
  tabletMin: 768,
  desktopLgMin: 1200,
  desktopXlMin: 1440,
  desktopXxlMin: 2560,
};
