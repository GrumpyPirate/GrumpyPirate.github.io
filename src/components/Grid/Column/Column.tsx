import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { gridColumns, gutterWidths, mediaQueries, rem } from 'styles';

import { ColumnProps } from './Column.types';

const Column = styled.div<PropsWithChildren<ColumnProps>>`
  position: relative;
  flex: 1 0 auto;
  max-width: 100%;
  min-height: 1px;
  padding-right: ${rem(gutterWidths.xs / 2)};
  padding-left: ${rem(gutterWidths.xs / 2)};

  @media ${mediaQueries.md} {
    padding-right: ${rem(gutterWidths.md / 2)};
    padding-left: ${rem(gutterWidths.md / 2)};
  }

  /* Column sizing, UP */
  ${(props) =>
    !!props.xs &&
    css`
      flex-basis: ${(props.xs / gridColumns) * 100}%;
      max-width: ${(props.xs / gridColumns) * 100}%;
    `}
  ${(props) =>
    !!props.sm &&
    css`
      @media ${mediaQueries.sm} {
        flex-basis: ${(props.sm / gridColumns) * 100}%;
        max-width: ${(props.sm / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.md &&
    css`
      @media ${mediaQueries.md} {
        flex-basis: ${(props.md / gridColumns) * 100}%;
        max-width: ${(props.md / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.lg &&
    css`
      @media ${mediaQueries.lg} {
        flex-basis: ${(props.lg / gridColumns) * 100}%;
        max-width: ${(props.lg / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.xl &&
    css`
      @media ${mediaQueries.xl} {
        flex-basis: ${(props.xl / gridColumns) * 100}%;
        max-width: ${(props.xl / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.xxl &&
    css`
      @media ${mediaQueries.xxl} {
        flex-basis: ${(props.xxl / gridColumns) * 100}%;
        max-width: ${(props.xxl / gridColumns) * 100}%;
      }
    `}

  /* Column sizing, DOWN */
  ${(props) =>
    !!props.xlDown &&
    css`
      @media ${mediaQueries.xlDown} {
        flex-basis: ${(props.xlDown / gridColumns) * 100}%;
        max-width: ${(props.xlDown / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.lgDown &&
    css`
      @media ${mediaQueries.lgDown} {
        flex-basis: ${(props.lgDown / gridColumns) * 100}%;
        max-width: ${(props.lgDown / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.mdDown &&
    css`
      @media ${mediaQueries.mdDown} {
        flex-basis: ${(props.mdDown / gridColumns) * 100}%;
        max-width: ${(props.mdDown / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.smDown &&
    css`
      @media ${mediaQueries.smDown} {
        flex-basis: ${(props.smDown / gridColumns) * 100}%;
        max-width: ${(props.smDown / gridColumns) * 100}%;
      }
    `}

  /* Column sizing, ONLY */
  ${(props) =>
    !!props.xsOnly &&
    css`
      @media ${mediaQueries.xsOnly} {
        flex-basis: ${(props.xsOnly / gridColumns) * 100}%;
        max-width: ${(props.xsOnly / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.smOnly &&
    css`
      @media ${mediaQueries.smOnly} {
        flex-basis: ${(props.smOnly / gridColumns) * 100}%;
        max-width: ${(props.smOnly / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.mdOnly &&
    css`
      @media ${mediaQueries.mdOnly} {
        flex-basis: ${(props.mdOnly / gridColumns) * 100}%;
        max-width: ${(props.mdOnly / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.lgOnly &&
    css`
      @media ${mediaQueries.lgOnly} {
        flex-basis: ${(props.lgOnly / gridColumns) * 100}%;
        max-width: ${(props.lgOnly / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.xlOnly &&
    css`
      @media ${mediaQueries.xlOnly} {
        flex-basis: ${(props.xlOnly / gridColumns) * 100}%;
        max-width: ${(props.xlOnly / gridColumns) * 100}%;
      }
    `}

  /* Column pushes */
  ${(props) =>
    !!props.push &&
    css`
      left: ${(props.push / gridColumns) * 100}%;
    `}
  ${(props) =>
    !!props.pushXs &&
    css`
      @media ${mediaQueries.xsOnly} {
        left: ${(props.pushXs / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.pushSm &&
    css`
      @media ${mediaQueries.sm} {
        left: ${(props.pushSm / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.pushMd &&
    css`
      @media ${mediaQueries.md} {
        left: ${(props.pushMd / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.pushLg &&
    css`
      @media ${mediaQueries.lg} {
        left: ${(props.pushLg / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.pushXl &&
    css`
      @media ${mediaQueries.xl} {
        left: ${(props.pushXl / gridColumns) * 100}%;
      }
    `}
  ${(props) =>
    !!props.pushXxl &&
    css`
      @media ${mediaQueries.xxl} {
        left: ${(props.pushXxl / gridColumns) * 100}%;
      }
    `}

  /* Column pulls */
  ${(props) =>
    !!props.pull &&
    css`
      left: ${(props.pull / gridColumns) * -100}%;
    `}
  ${(props) =>
    !!props.pullXs &&
    css`
      @media ${mediaQueries.xsOnly} {
        left: ${(props.pullXs / gridColumns) * -100}%;
      }
    `}
  ${(props) =>
    !!props.pullSm &&
    css`
      @media ${mediaQueries.sm} {
        left: ${(props.pullSm / gridColumns) * -100}%;
      }
    `}
  ${(props) =>
    !!props.pullMd &&
    css`
      @media ${mediaQueries.md} {
        left: ${(props.pullMd / gridColumns) * -100}%;
      }
    `}
  ${(props) =>
    !!props.pullLg &&
    css`
      @media ${mediaQueries.lg} {
        left: ${(props.pullLg / gridColumns) * -100}%;
      }
    `}
  ${(props) =>
    !!props.pullXl &&
    css`
      @media ${mediaQueries.xl} {
        left: ${(props.pullXl / gridColumns) * -100}%;
      }
    `}
  ${(props) =>
    !!props.pullXxl &&
    css`
      @media ${mediaQueries.xxl} {
        left: ${(props.pullXxl / gridColumns) * -100}%;
      }
    `}
`;

export default Column;
