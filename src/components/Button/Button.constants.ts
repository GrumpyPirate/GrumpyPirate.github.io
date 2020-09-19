import Color from 'color';
import { css, SimpleInterpolation } from 'styled-components';

import { animDur, palette } from 'styles';

export const btnDisabledStyles = css`
  &:disabled,
  &[disabled] {
    &,
    &:hover,
    &:focus,
    &:active {
      background-color: ${palette.greyLight};
      border-color: ${palette.greyLight};
      color: ${palette.white};
      cursor: not-allowed;
      pointer-events: none;
    }
  }
`;
export const createButtonVariant = (fgColor: string, bgColor: string): SimpleInterpolation => css`
  background-color: ${bgColor};
  border-color: ${bgColor};

  &,
  &:hover,
  &:focus,
  &:active {
    color: ${fgColor};
  }

  &:hover,
  &:focus {
    background-color: ${Color(bgColor).darken(0.05).string()};
    border-color: ${Color(bgColor).darken(0.05).string()};
  }

  &:active {
    background-color: ${bgColor};
    border-color: ${bgColor};
    transform: translateY(1px);
    transition-duration: 0s, ${animDur}s, ${animDur}s;
  }

  ${btnDisabledStyles}
`;
