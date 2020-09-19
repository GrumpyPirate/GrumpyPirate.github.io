import Color from 'color';
import styled from 'styled-components';

import Icon from 'components/Icon/Icon';
import Heading from 'components/Typography/Heading/Heading';
import {
  createHeading,
  gridGutterWidthBase,
  gutterWidths,
  listReset,
  mediaQueries,
  palette,
  rem,
} from 'styles';

export const BackgroundImage = styled.figure`
  height: 100%;
  left: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;

  &::after {
    background-color: ${Color(palette.themeAccentDark)
      .darken(0.8)
      .desaturate(0.4)
      .alpha(0.8)
      .string()};
    bottom: 0;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  img {
    height: 125%;
    object-fit: cover;
    position: absolute;
    transform: rotateZ(-4deg) translateX(-12.5%);
    transform-origin: top left;
    width: 125%;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Title = styled(Heading)`
  background-color: ${Color(palette.themeDarkShades).alpha(0.8).string()};
  box-decoration-break: clone;
  color: ${palette.themeAccentDark};
  display: inline-block;
  margin: 0;
  padding: 0.25rem ${rem(gutterWidths.xs / 2)};
  vertical-align: top;

  @media ${mediaQueries.sm} {
    word-break: normal;
  }

  @media ${mediaQueries.md} {
    padding: 0.25rem ${rem(gridGutterWidthBase / 2)};
  }
`;

export const Back = styled.div`
  a {
    ${createHeading(6)}

    background: ${palette.themeAccentDark};
    color: ${palette.themeLightShades};
    display: inline-block;
    margin-bottom: 0;
    padding: 0.25rem ${rem(gutterWidths.xs / 2)};
    position: relative;
    vertical-align: bottom;
    z-index: 1;

    @media ${mediaQueries.md} {
      padding: 0.25rem ${rem(gridGutterWidthBase / 2)};
    }

    &:hover,
    &:focus {
      color: ${palette.themeLightShades};
    }
  }
`;

export const Tech = styled.div`
  background-color: ${Color(palette.themeDarkShades).alpha(0.8).string()};
  color: ${palette.white};
  padding: 0 ${rem(gutterWidths.xs / 2)};

  @media ${mediaQueries.sm} {
    align-items: baseline;
    display: inline-flex;
  }

  @media ${mediaQueries.md} {
    padding: 0 ${rem(gridGutterWidthBase / 2)};
  }
`;

export const TechHeading = styled(Heading)`
  margin: 0;
`;

export const TechList = styled.ul`
  ${listReset}

  @media ${mediaQueries.sm} {
    border-left: solid 1px ${palette.themeAccentLight};
    margin-left: 1rem;
    padding-left: 1rem;
  }
`;

export const TechListItem = styled.li`
  display: inline-block;
  padding: 0.5rem 0;
  vertical-align: middle;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  ${Icon} {
    height: ${rem(48)};
    width: ${rem(64)};
  }
`;
