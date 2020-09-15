import { screenSizes } from './screen-sizes';

const mediaQueries = {
  // 'Up' media queries. E.g. 'For all screen sizes above tabletMin'
  sm: `(min-width: ${screenSizes.largeMobileMin / 16}em)`,
  md: `(min-width: ${screenSizes.tabletMin / 16}em)`,
  lg: `(min-width: ${screenSizes.desktopLgMin / 16}em)`,
  xl: `(min-width: ${screenSizes.desktopXlMin / 16}em)`,
  xxl: `(min-width: ${screenSizes.desktopXxlMin / 16}em)`,
  // 'Down' media queries. E.g. 'For all screen sizes below, and including, tabletMin'
  smDown: `(max-width: ${(screenSizes.tabletMin - 1) / 16}em)`,
  mdDown: `(max-width: ${(screenSizes.desktopLgMin - 1) / 16}em)`,
  lgDown: `(max-width: ${(screenSizes.desktopXlMin - 1) / 16}em)`,
  xlDown: `(max-width: ${(screenSizes.desktopXxlMin - 1) / 16}em)`,
  // 'Only' media queries. E.g. 'For screens sizes between tabletMin and (desktopLgMin - 1) only'
  xsOnly: `(max-width: ${(screenSizes.largeMobileMin - 1) / 16}em)`,
  smOnly: `(min-width: ${screenSizes.largeMobileMin / 16}em) and (max-width: ${
    (screenSizes.tabletMin - 1) / 16
  }em)`,
  mdOnly: `(min-width: ${screenSizes.tabletMin / 16}em) and (max-width: ${
    (screenSizes.desktopLgMin - 1) / 16
  }em)`,
  lgOnly: `(min-width: ${screenSizes.desktopLgMin / 16}em) and (max-width: ${
    (screenSizes.desktopXlMin - 1) / 16
  }em)`,
  xlOnly: `(min-width: ${screenSizes.desktopXlMin / 16}em) and (max-width: ${
    (screenSizes.desktopXxlMin - 1) / 16
  }em)`,
};

export default mediaQueries;
