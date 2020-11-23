import styled from 'styled-components';

import { mediaQueries, rem, sidebarWidth, sidebarWidthXl } from 'styles';

export const MainWrapper = styled.main`
  position: relative;

  @media ${mediaQueries.lg} {
    flex: 1 1 auto;
    padding-left: ${rem(sidebarWidth)};
  }

  @media ${mediaQueries.xl} {
    padding-left: ${rem(sidebarWidthXl)};
  }
`;

export const Content = styled.div`
  position: relative;
`;
