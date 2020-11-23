import Color from 'color';

import { palette } from './constants';

export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  heavy: 900,
};
export const fontFamilyBase = 'sans-serif';
export const bodyFontFamily = `'Open Sans', ${fontFamilyBase}`;
export const bodyFontWeight = fontWeights.light;
export const lineHeight = 1.5;
export const paragraphMarginBottom = '1rem';

// Headings
// export const headingsFontFamily = `'Titillium Web', ${fontFamilyBase}`;
export const headingsFontFamily = `'Barlow', ${fontFamilyBase}`;
export const headingsMarginBottom = paragraphMarginBottom;
export const headingsLineHeight = 1.2;
export const headingsFontWeight = fontWeights.light;
export const headingsLetterSpacing = '0.2em';
export const headingsColor = Color(palette.themeAccentDark).desaturate(0.25).string();

// Sizes - Desktop
export const fontSizeH1 = 72;
export const fontSizeH2 = 56;
export const fontSizeH3 = 48;
export const fontSizeH4 = 24;
export const fontSizeH5 = 16;
export const fontSizeH6 = 14;

// Sizes - Mobile
export const fontSizeH1Mobile = fontSizeH1 * 0.55;
export const fontSizeH2Mobile = fontSizeH2 * 0.75;
export const fontSizeH3Mobile = fontSizeH3 * 0.75;
export const fontSizeH4Mobile = 16;
export const fontSizeH5Mobile = 16;
export const fontSizeH6Mobile = 16;

// Links
export const linkFontWeight = fontWeights.semibold;
export const linkColor = palette.themeMainBrand;
export const linkHoverColor = palette.themeAccentLight;
export const linkActiveColor = Color(linkHoverColor).darken(0.15).string();

// Buttons
export const btnFontSize = 16;
