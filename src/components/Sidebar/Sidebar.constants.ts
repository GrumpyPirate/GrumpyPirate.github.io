import Color from 'color';
import styled, { css } from 'styled-components';

import spriteImage from 'images/head-sprite.png';
import {
  animDur,
  buttonReset,
  createHeading,
  fontSizeH4,
  gridGutterWidthBase,
  mediaQueries,
  noOutline,
  palette,
  rem,
  sidebarHeightMobile,
} from 'styles';

const burgerBarSize = 32;
const burgerBarHeight = 1;
const burgerBarSpacing = 8;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: ${rem(sidebarHeightMobile)};
  justify-content: space-between;
  padding-bottom: ${rem(gridGutterWidthBase / 4)};
  padding-top: ${rem(gridGutterWidthBase / 4)};
  position: relative;
  z-index: 11;

  @media ${mediaQueries.lg} {
    background: 0;
    display: block;
    height: auto;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const BrandLogo = styled.figure`
  ${noOutline}
  background: url(${spriteImage}) top left no-repeat transparent;
  background-size: ${rem(32)} ${rem(64)};
  display: block;
  filter: drop-shadow(${rem(4)} ${rem(4)} ${rem(2)} rgba(0, 0, 0, 0.2));
  height: ${rem(32)};
  image-rendering: crisp-edges;
  margin: 0;
  transition: transform ${animDur}s;
  width: ${rem(32)};

  @media ${mediaQueries.lg} {
    background-size: ${rem(48)} ${rem(96)};
    height: ${rem(48)};
    margin-left: auto;
    width: ${rem(48)};
  }
`;

export const Brand = styled.div`
  a {
    ${noOutline};
    ${createHeading(5)}

    display: flex;
    align-items: center;
    letter-spacing: normal;
    margin-bottom: 0;

    @media ${mediaQueries.lg} {
      font-size: ${rem(fontSizeH4)};
      display: block;
    }

    &,
    &:hover,
    &:focus {
      color: ${palette.themeLightShades};
    }

    &:hover {
      ${BrandLogo} {
        background-position: bottom left;
      }
    }

    &:active {
      ${BrandLogo} {
        transform: scale(0.875);
        transition-duration: 0s;
      }
    }
  }
`;

export const BrandName = styled.span`
  color: inherit;
  display: inline-block;
  margin-left: 1rem;
  vertical-align: middle;
`;

export const JobTitle = styled.span`
  color: ${palette.themeLightShades};
  display: block;
  font-size: 0.75em;
  opacity: 0.75;

  @media ${mediaQueries.mdDown} {
    display: none;
  }
`;

export const Divider = styled.hr`
  border-color: ${Color(palette.themeLightShades).alpha(0.2).string()};
  border-style: solid none none;
  border-width: 1px;
  margin: 2rem 0;

  @media ${mediaQueries.mdDown} {
    display: none;
  }
`;

export const BurgerButtonWrapper = styled.div`
  @media ${mediaQueries.md} {
    display: none;
  }
`;

export const BurgerButtonBar = styled.span`
  top: calc(50% - ${rem(burgerBarHeight / 2)});

  &,
  &::before,
  &::after {
    background-color: ${palette.themeLightShades};
    display: block;
    height: ${rem(burgerBarHeight)};
    left: 0;
    position: absolute;
    transition: transform ${animDur}s ease, background-color ${animDur}s ease;
    width: ${rem(burgerBarSize)};
  }

  &::before,
  &::after {
    content: '';
  }

  &::before {
    transform: translateY(-${rem(burgerBarHeight + burgerBarSpacing)});
  }

  &::after {
    transform: translateY(${rem(burgerBarHeight + burgerBarSpacing)});
  }
`;

export const BurgerButton = styled.button`
  ${buttonReset}

  display: block;
  height: ${rem(burgerBarSize)};
  position: relative;
  transition: transform 0.075s ease;
  width: ${rem(burgerBarSize)};

  &:active {
    transform: scale(0.9);
  }

  &[aria-expanded='true'] {
    ${BurgerButtonBar} {
      background-color: transparent;

      &::before {
        transform: rotate(-135deg);
      }

      &::after {
        transform: rotate(135deg);
      }
    }
  }
`;

export const DesktopSitenavWrapper = styled.div`
  @media ${mediaQueries.smDown} {
    display: none;
  }
`;

export const MobileSitenavWrapper = styled.div<{ isOpen: boolean }>`
  background-color: ${palette.themeMainBrand};
  border-bottom: solid ${rem(1)} ${palette.themeAccentLight};
  border-top: solid ${rem(1)} ${Color(palette.themeAccentLight).alpha(0.25).string()};
  left: 0;
  margin: 0;
  padding: 0.5rem 0;
  position: fixed;
  top: ${rem(sidebarHeightMobile)};
  transition: opacity ${animDur}s ease, transform ${animDur}s ease, visibility ${animDur}s ease;
  width: 100%;
  z-index: 10;

  @media ${mediaQueries.md} {
    display: none;
  }

  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0;
      pointer-events: none;
      transform: translateY(-50%);
      visibility: hidden;
    `}
`;
