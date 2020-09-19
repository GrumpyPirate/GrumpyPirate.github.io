import styled, { css } from 'styled-components';

import { mediaQueries, rem, sidebarHeightMobile, sidebarWidth, sidebarWidthXl } from 'styles';

export const MainWrapper = styled.main<{ isLoading: boolean }>`
  position: relative;
  top: ${rem(sidebarHeightMobile)};

  @media ${mediaQueries.lg} {
    top: auto;
    flex: 1 1 auto;
    padding-left: ${rem(sidebarWidth)};
  }

  @media ${mediaQueries.xl} {
    padding-left: ${rem(sidebarWidthXl)};
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      overflow: hidden;
    `}
`;

export const Content = styled.div`
  position: relative;
`;
