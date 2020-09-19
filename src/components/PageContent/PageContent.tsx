import styled from 'styled-components';

import { mediaQueries, rem } from 'styles';

const PageContent = styled.div`
  padding-bottom: ${rem(48 / 2)};
  padding-top: ${rem(48 / 2)};
  text-align: center;

  @media ${mediaQueries.md} {
    padding-bottom: ${rem(48)};
    padding-top: ${rem(48)};
  }
`;

export default PageContent;
