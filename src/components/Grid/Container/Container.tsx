import styled from 'styled-components';

import { gutterWidths, mediaQueries, rem } from 'styles';

const Container = styled.div`
  width: 100%;
  padding-right: ${rem(gutterWidths.xs / 2)};
  padding-left: ${rem(gutterWidths.xs / 2)};

  @media ${mediaQueries.md} {
    padding-right: ${rem(gutterWidths.md / 2)};
    padding-left: ${rem(gutterWidths.md / 2)};
  }
`;

export default Container;
