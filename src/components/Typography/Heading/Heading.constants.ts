import { css } from 'styled-components';

import {
  fontSizeH1,
  fontSizeH1Mobile,
  fontSizeH2,
  fontSizeH2Mobile,
  fontSizeH3,
  fontSizeH3Mobile,
  fontSizeH4,
  fontSizeH4Mobile,
  fontSizeH5,
  fontSizeH5Mobile,
  fontSizeH6,
  fontSizeH6Mobile,
  mediaQueries,
  rem,
} from 'styles';

export const heading1Styles = css`
  font-size: ${rem(fontSizeH1Mobile)};

  @media ${mediaQueries.md} {
    font-size: ${rem(fontSizeH1)};
  }
`;
export const heading2Styles = css`
  font-size: ${rem(fontSizeH2Mobile)};

  @media ${mediaQueries.md} {
    font-size: ${rem(fontSizeH2)};
  }
`;
export const heading3Styles = css`
  font-size: ${rem(fontSizeH3Mobile)};

  @media ${mediaQueries.md} {
    font-size: ${rem(fontSizeH3)};
  }
`;
export const heading4Styles = css`
  font-size: ${rem(fontSizeH4Mobile)};

  @media ${mediaQueries.md} {
    font-size: ${rem(fontSizeH4)};
  }
`;
export const heading5Styles = css`
  font-size: ${rem(fontSizeH5Mobile)};

  @media ${mediaQueries.md} {
    font-size: ${rem(fontSizeH5)};
  }
`;
export const heading6Styles = css`
  font-size: ${rem(fontSizeH6Mobile)};

  @media ${mediaQueries.md} {
    font-size: ${rem(fontSizeH6)};
  }
`;
