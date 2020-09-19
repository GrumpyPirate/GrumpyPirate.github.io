import { createGlobalStyle } from 'styled-components';

import {
  animDur,
  bodyBgDark,
  bodyColorDark,
  bodyFontFamily,
  fontWeights,
  lineHeight,
  linkActiveColor,
  linkColor,
  linkFontWeight,
  linkHoverColor,
  noOutline,
  noUnderline,
  palette,
  paragraphMarginBottom,
} from 'styles';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${bodyBgDark};
  }

  body {
    color: ${bodyColorDark};
    font-family: ${bodyFontFamily};
    font-weight: ${fontWeights.light};
    line-height: ${lineHeight};
  }

  p {
    margin: 0 0 ${paragraphMarginBottom};
  }

  a {
    ${noOutline}
    ${noUnderline}

    color: ${linkColor};
    font-weight: ${linkFontWeight};
    transition-duration: ${animDur}s;
    transition-property: color, background;

    &:hover,
    &:focus {
      color: ${linkHoverColor};
    }

    &:active {
      color: ${linkActiveColor};
    }
  }

  ::selection {
    background-color: ${palette.themeAccentLight};
    color: ${palette.white};
  }

  ul,
  ol {
    margin: 0 0 ${paragraphMarginBottom};
    padding: 0 0 0 1em;
  }

  strong {
    font-weight: ${fontWeights.bold};
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export default GlobalStyles;
