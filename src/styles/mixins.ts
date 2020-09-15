import { css } from 'styled-components';

export const noUnderline = css`
  &,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

export const noOutline = css`
  &,
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;

export const fontSmoothingAntialiased = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const visuallyHidden = css`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

export const listReset = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const overflowYScroll = css`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const buttonReset = css`
  ${fontSmoothingAntialiased}
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects inability to style clickable 'input' types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  touch-action: manipulation;
`;
