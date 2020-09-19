import Color from 'color';
import styled, { css, keyframes } from 'styled-components';

import Icon from 'components/Icon/Icon';
import {
  animDur,
  buttonReset,
  createHeading,
  easings,
  fontWeights,
  mediaQueries,
  noOutline,
  palette,
  rem,
  sidebarHeightMobile,
} from 'styles';

export const scrollButtonAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25%);
  }

  40%,
  60% {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(25%);
  }
`;

export const ScrollButtonLabel = styled.span`
  display: block;
`;
export const ScrollButtonIcon = styled.div`
  display: block;
  font-size: 1.75em;
  position: relative;

  ${Icon} {
    animation: ${scrollButtonAnimation} 1.5s ${easings['ease-in-out-quart']} 0s infinite;
  }
`;
export const ScrollButton = styled.button`
  ${buttonReset};
  ${noOutline}
  ${createHeading(5)}

  bottom: 0;
  color: ${Color(palette.themeLightShades).alpha(0.5).string()};
  left: 50%;
  margin-bottom: ${rem(32)};
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%);
  transition: color ${animDur}s;

  &:hover,
  &:focus {
    color: ${palette.themeLightShades};
  }
`;

export const Content = styled.div``;

export const Header = styled.header<{ isFullscreen: boolean }>`
  background-color: ${palette.themeDarkShades};
  border-bottom: solid ${rem(6)} ${palette.themeAccentLight};
  text-align: center;
  text-transform: uppercase;

  @media ${mediaQueries.lg} {
    border-bottom-width: ${rem(8)};
  }

  ${({ isFullscreen }) =>
    isFullscreen &&
    css`
      align-content: center;
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      height: 100vh;
      position: relative;

      ${Content} {
        @media ${mediaQueries.mdDown} {
          margin-top: ${rem(-sidebarHeightMobile)};
        }
      }
    `}
`;

export const Title = styled.div`
  color: ${palette.themeAccentLight};
  padding: ${rem(16)} 0;
  position: relative;

  @media ${mediaQueries.md} {
    padding-top: ${rem(32)};
  }
`;

export const TitleText = styled.h1`
  ${createHeading(1)}

  font-size: 12vmin;
  font-weight: ${fontWeights.extralight};
  margin: 0;
  user-select: none;

  &::first-letter {
    margin-left: 0.25em;
  }
`;

export const getFullscreenHeight = (): string => {
  const windowHeight = window.innerHeight;

  return window.innerWidth < 992 ? `calc(${windowHeight - 50}px)` : `${windowHeight}px`;
};
