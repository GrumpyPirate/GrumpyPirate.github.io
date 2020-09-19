import styled from 'styled-components';

import {
  createHeading,
  createLaserLink,
  fontWeights,
  mediaQueries,
  noUnderline,
  palette,
  rem,
} from 'styles';

import { SitenavNavItem } from './Sitenav.types';

// Component data
export const navItems: SitenavNavItem[] = [
  {
    key: 1,
    to: '/',
    label: 'About',
  },
  {
    key: 2,
    to: '/portfolio',
    label: 'Portfolio',
  },
];

// Styled components
export const Item = styled.li`
  a {
    ${noUnderline};
    ${createHeading(5)};
    ${createLaserLink('out')}

    color: ${palette.themeAccentLight};
    font-weight: ${fontWeights.regular};
    letter-spacing: normal;
    margin-bottom: 0;
    padding-bottom: 0.125em;

    &:hover,
    &:focus,
    &.active {
      color: ${palette.white};
    }

    &.active {
      &::before,
      &::after {
        transform: scaleX(1);
      }
    }
  }

  &:not(:last-child) {
    margin: 0 0 ${rem(12)};

    @media ${mediaQueries.md} {
      margin: 0 ${rem(12)} 0 0;
    }

    @media ${mediaQueries.lg} {
      margin: 0;
    }
  }
`;
