import Color from 'color';
import styled from 'styled-components';

import {
  animDur,
  forceAspectRatio,
  gridGutterWidthBase,
  gutterWidths,
  listReset,
  mediaQueries,
  palette,
  rem,
} from 'styles';

// Styled components
export const List = styled.ul`
  ${listReset}
  margin: 0 ${rem(gutterWidths.xs * -0.25)};
  padding-top: ${rem(gutterWidths.xs * 0.5)};

  @media ${mediaQueries.md} {
    display: flex;
    flex-wrap: wrap;
    margin: 0 ${rem(gutterWidths.md * -0.25)};
    padding-top: ${rem(gutterWidths.md * 0.5)};
  }
`;

export const ListItemImage = styled.figure`
  bottom: 0;
  left: 0;
  margin: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform ${animDur}s ease;

  img {
    bottom: 0;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

export const ListItemCopy = styled.div`
  background-image: linear-gradient(
    to top,
    ${Color(palette.themeDarkShades).alpha(0.8).string()},
    ${Color(palette.themeDarkShades).alpha(0.4).string()} 40%,
    ${Color(palette.themeDarkShades).alpha(0).string()}
  );
  color: ${palette.white};
  padding: 15vmax ${rem(gridGutterWidthBase / 2)} ${rem(gridGutterWidthBase / 2)};
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const ListItemDescription = styled.p`
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  display: block;
  margin-right: ${rem(gutterWidths.xs / 4)};
  margin-bottom: ${rem(gutterWidths.xs / 2)};
  margin-left: ${rem(gutterWidths.xs / 4)};
  text-align: left;

  @media ${mediaQueries.sm} {
    flex-basis: calc(50% - ${rem(gutterWidths.xs / 2)});
    margin-right: ${rem(gutterWidths.xs / 4)};
    margin-bottom: ${rem(gutterWidths.xs / 2)};
    margin-left: ${rem(gutterWidths.xs / 4)};
  }

  @media ${mediaQueries.md} {
    flex-basis: calc(50% - ${rem(gutterWidths.md / 2)});
    margin-right: ${rem(gutterWidths.md / 4)};
    margin-bottom: ${rem(gutterWidths.md / 2)};
    margin-left: ${rem(gutterWidths.md / 4)};
  }

  @media ${mediaQueries.lg} {
    border-bottom-width: ${rem(gutterWidths.md / 4)};
  }

  &:hover,
  &:focus {
    ${ListItemImage} {
      transform: scale(1.0625);
    }
  }

  a {
    ${forceAspectRatio(16, 9)}
    position: relative;
    display: flex;
    flex: 1 1 calc(100% - ${rem(gutterWidths.xs / 2)});
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    border: ${rem(gutterWidths.xs / 4)} solid ${palette.themeAccentDark};
    border-style: none none solid;
    background-color: ${palette.greyDark};
  }
`;
