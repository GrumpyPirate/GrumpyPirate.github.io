import Color from 'color';
import { css, SimpleInterpolation } from 'styled-components';

import { animDur } from './animation';
import { mediaQueries } from './media-queries';
import { noUnderline } from './mixins';
import {
  fontSizeH1,
  fontSizeH1Mobile,
  fontSizeH2,
  fontSizeH2Mobile,
  fontSizeH3,
  fontSizeH3Mobile,
  fontSizeH4,
  fontSizeH4Mobile,
  fontSizeH5,
  fontSizeH5Mobile,
  fontSizeH6,
  fontSizeH6Mobile,
  headingsFontFamily,
  headingsFontWeight,
  headingsLetterSpacing,
  headingsLineHeight,
  headingsMarginBottom,
} from './typography';

/**
 * Converts a pixel value to rems. Operates under the assumption that the default
 * browser font size is 16px.
 *
 * @param {Number} pixels - px value to convert
 *
 * @returns {Number}
 */
export const rem = (pixels: number): string => `${pixels / 16}rem`;

/**
 * Forces a given element to size itself to a given aspect ratio.
 *
 * @param width
 * @param height
 */
export const forceAspectRatio = (width: number, height: number): SimpleInterpolation => css`
  height: 0;
  padding-bottom: ${(height / width) * 100}%;
`;

export const createHeading = (level = 5): SimpleInterpolation => css`
  font-family: ${headingsFontFamily};
  font-weight: ${headingsFontWeight};
  letter-spacing: ${headingsLetterSpacing};
  line-height: ${headingsLineHeight};
  margin: 0 0 ${headingsMarginBottom};
  text-transform: uppercase;

  ${level === 1 &&
  css`
    font-size: ${rem(fontSizeH1Mobile)};

    @media ${mediaQueries.md} {
      font-size: ${rem(fontSizeH1)};
    }
  `}

  ${level === 2 &&
  css`
    font-size: ${rem(fontSizeH2Mobile)};

    @media ${mediaQueries.md} {
      font-size: ${rem(fontSizeH2)};
    }
  `}

  ${level === 3 &&
  css`
    font-size: ${rem(fontSizeH3Mobile)};

    @media ${mediaQueries.md} {
      font-size: ${rem(fontSizeH3)};
    }
  `}

  ${level === 4 &&
  css`
    font-size: ${rem(fontSizeH4Mobile)};

    @media ${mediaQueries.md} {
      font-size: ${rem(fontSizeH4)};
    }
  `}

  ${level === 5 &&
  css`
    font-size: ${rem(fontSizeH5Mobile)};

    @media ${mediaQueries.md} {
      font-size: ${rem(fontSizeH5)};
    }
  `}

  ${level === 6 &&
  css`
    font-size: ${rem(fontSizeH6Mobile)};

    @media ${mediaQueries.md} {
      font-size: ${rem(fontSizeH6)};
    }
  `}
`;

export const createLinkStyle = ({
  color,
  hoverColor,
  activeColor,
  lighten = false,
  isSelf = false,
}: {
  color: string;
  hoverColor?: string;
  activeColor?: string;
  lighten?: boolean;
  isSelf?: boolean;
}): SimpleInterpolation => {
  const generatedStyles = css`
    color: ${color};

    &:hover,
    &:focus {
      ${hoverColor
        ? css`
            color: ${hoverColor};
          `
        : css`
            ${lighten
              ? css`
                  color: ${Color(color).lighten(0.1).string()};
                `
              : css`
                  color: ${Color(color).darken(0.1).string()};
                `}
          `}
    }

    &:active {
      ${activeColor
        ? css`
            color: ${activeColor};
          `
        : css`
            color: ${Color(color).darken(0.1).string()};
          `}
    }
  `;

  return isSelf
    ? css`
        a {
          ${generatedStyles}
        }
      `
    : generatedStyles;
};

export const createLaserLink = (direction: 'ltr' | 'rtl' | 'out' = 'ltr'): SimpleInterpolation =>
  css`
    ${noUnderline};

    display: inline-block;
    position: relative;

    &::before {
      background-color: currentColor;
      bottom: 0;
      content: '';
      display: block;
      height: 1px;
      left: 0;
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      transition: transform ${animDur}s ease;
    }

    &:focus,
    &:hover,
    &:active {
      &::before {
        transform: scaleX(1);
      }
    }

    ${direction === 'ltr' &&
    css`
      &::before {
        transform-origin: left center;
      }
    `}

    ${direction === 'rtl' &&
    css`
      &::before {
        transform-origin: right center;
      }
    `}

    ${direction === 'out' &&
    css`
      &::before,
      &::after {
        background-color: currentColor;
        bottom: 0;
        content: '';
        display: block;
        height: 1px;
        position: absolute;
        transform: scaleX(0);
        transition: transform ${animDur}s ease;
        width: 50%;
      }

      &::before {
        left: 0;
        transform-origin: right center;
      }

      &::after {
        right: 0;
        transform-origin: left center;
      }

      &:focus,
      &:hover,
      &:active {
        &::before,
        &::after {
          transform: scaleX(1);
        }
      }
    `}
  `;
