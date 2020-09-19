import Color from 'color';
import styled, { css } from 'styled-components';

import Icon from 'components/Icon/Icon';
import Heading from 'components/Typography/Heading/Heading';
import {
  bodyBgDark,
  fontSizeH1,
  fontSizeH3,
  gridGutterWidthBase,
  headingsColor,
  mediaQueries,
  palette,
  rem,
} from 'styles';

export const PageHeaderDivider = styled.hr`
  border-color: currentColor;
  border-style: solid none none;
  border-width: 1px;
  margin: 0 0 ${rem(16)};
  opacity: 0.5;

  @media ${mediaQueries.md} {
    margin-bottom: ${rem(32)};
  }
`;

export const SectionGraphic = styled.figure<{ single?: boolean }>`
  align-items: center;
  color: ${palette.themeAccentLight};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 0 ${rem(48)};

  ${({ single }) =>
    !!single &&
    css`
      margin-bottom: 0;
    `}
`;

export const AboutIcon = styled.div<{ large?: boolean }>`
  display: block;
  flex: 0 1 auto;
  font-size: ${rem(fontSizeH3)};
  line-height: 1;
  margin-bottom: 1rem;
  padding: 0 ${rem(gridGutterWidthBase / 4)};
  text-align: center;

  @media ${mediaQueries.lg} {
    font-size: ${rem(fontSizeH1 * 1.5)};
    padding: 0 ${rem(gridGutterWidthBase / 2)};
  }

  ${({ large }) =>
    !!large &&
    css`
      font-size: ${rem(fontSizeH1)};

      @media ${mediaQueries.md} {
        font-size: ${rem(fontSizeH1 * 2)};
      }
    `}
`;

export const AboutSection = styled.div`
  margin: ${rem(48)} 0;

  @media ${mediaQueries.md} {
    margin: ${rem(96)} 0;
  }

  &:first-of-type {
    margin-top: 0;
  }

  ${Heading} {
    border-bottom: ${rem(1)} solid
      ${Color(bodyBgDark).mix(Color(palette.themeAccentLight), 0.75).string()};
    margin-bottom: ${rem(48)};
    padding-bottom: ${rem(16)};

    ${Icon} {
      color: ${headingsColor};
      display: inline-block;
      text-align: center;
      height: 1.125em;
      width: 1.125em;
    }
  }
`;
