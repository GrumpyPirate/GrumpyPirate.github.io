import styled, { css } from 'styled-components';

import { gutterWidths, mediaQueries, rem } from 'styles';

import { RowProps } from './Row.types';

const Row = styled.div<RowProps>`
  display: flex;
  flex-flow: row wrap;
  margin-right: ${rem(gutterWidths.xs / -2)};
  margin-left: ${rem(gutterWidths.xs / -2)};

  ${({ xAlign }) => {
    switch (xAlign) {
      case 'center':
        return css`
          justify-content: center;
        `;
      case 'right':
        return css`
          justify-content: flex-end;
        `;
      default:
        return '';
    }
  }}

  ${({ yAlign }) => {
    switch (yAlign) {
      case 'top':
        return css`
          align-items: flex-start;
        `;
      case 'center':
        return css`
          align-items: center;
        `;
      case 'bottom':
        return css`
          align-items: flex-end;
        `;
      case 'stretch':
        return css`
          align-items: stretch;
        `;
      default:
        return '';
    }
  }}

  @media ${mediaQueries.md} {
    margin-right: ${rem(gutterWidths.md / -2)};
    margin-left: ${rem(gutterWidths.md / -2)};
  }
`;

export default Row;
