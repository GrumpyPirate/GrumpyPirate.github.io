import styled, { css, keyframes } from 'styled-components';

import Icon from 'components/Icon/Icon';
import {
  animEase,
  createHeading,
  mediaQueries,
  palette,
  paragraphMarginBottom,
  rem,
  sidebarHeightMobile,
  sidebarWidth,
  sidebarWidthXl,
} from 'styles';

const spin = keyframes`
  from {
    transform: rotateZ(0);
  }

  to {
    transform: rotateZ(1turn);
  }
`;

export const Image = styled.figure`
  margin: 0 0 ${paragraphMarginBottom};

  ${Icon} {
    animation: ${spin} 2.25s linear 0s infinite;
    display: block;
    height: ${rem(48)};
    margin: auto;
    width: ${rem(48)};
  }
`;

export const Text = styled.h6`
  ${createHeading(4)}

  left: ${rem(6)};
  margin: 0;
  position: relative;
  text-transform: uppercase;
`;

export const Wrapper = styled.div<{ isLoading: boolean }>`
  align-items: center;
  background-color: ${palette.themeDarkShades};
  bottom: 0;
  color: ${palette.themeAccentLight};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: ${rem(sidebarHeightMobile)};
  transition-duration: 0.3s;
  transition-property: opacity, visibility;
  transition-timing-function: ${animEase};
  transition-delay: 0.3s;
  user-select: none;
  visibility: hidden;
  z-index: 2;

  @media ${mediaQueries.lg} {
    left: ${rem(sidebarWidth)};
    top: 0;
  }

  @media ${mediaQueries.xl} {
    left: ${rem(sidebarWidthXl)};
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 1;
      visibility: visible;
      transition-delay: 0s;
    `}
`;
