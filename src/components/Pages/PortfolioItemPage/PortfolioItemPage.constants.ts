import styled from 'styled-components';

import { mediaQueries, rem } from 'styles';

export const SupportingImage = styled.figure`
  border-radius: ${rem(8)};
  margin: 0;
  overflow: hidden;

  > img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export const ContentDivider = styled.hr`
  border-color: currentColor;
  border-style: solid none none;
  border-width: 1px;
  margin: 2rem 0;
  opacity: 0.25;
`;

export const ExternalLinkWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;

  @media ${mediaQueries.md} {
    margin-top: ${rem(64)};
  }
`;
