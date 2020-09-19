import styled from 'styled-components';

import { mediaQueries, rem } from 'styles';

export const Content = styled.div`
  padding: 2rem 0;

  @media ${mediaQueries.md} {
    padding: 4rem 0;
  }
`;

export const SupportingImage = styled.figure`
  border-radius: 0.25rem;
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
