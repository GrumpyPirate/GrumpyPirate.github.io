import styled, { createGlobalStyle } from 'styled-components';

import Spinner from 'components/Spinner/Spinner';
import {
  animDur,
  bodyBgDark,
  bodyColorDark,
  bodyFontFamily,
  bodyFontWeight,
  fontWeights,
  lineHeight,
  linkActiveColor,
  linkColor,
  linkFontWeight,
  linkHoverColor,
  mediaQueries,
  noOutline,
  noUnderline,
  palette,
  paragraphMarginBottom,
  rem,
  sidebarHeightMobile,
} from 'styles';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${bodyBgDark};
  }

  body {
    color: ${bodyColorDark};
    font-family: ${bodyFontFamily};
    font-weight: ${bodyFontWeight};
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
    font-weight: ${fontWeights.semibold};
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export const RouteFallbackSpinner = styled(Spinner)`
  height: calc(100vh - ${rem(sidebarHeightMobile)});

  @media ${mediaQueries.lg} {
    height: 100vh;
  }
`;
