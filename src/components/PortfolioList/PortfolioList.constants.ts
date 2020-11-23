import styled, { css } from 'styled-components';

import { gutterWidths, listReset, mediaQueries, rem } from 'styles';

import { PortfolioItemSortingStrategyConfig } from './PortfolioList.types';

// Constants
export const sortingStrategies: PortfolioItemSortingStrategyConfig = {
  dateNewestFirst: {
    label: 'Date (Newest first)',
    sortingFn: (itemA, itemB) =>
      new Date(itemB.sys.firstPublishedAt).getTime() -
      new Date(itemA.sys.firstPublishedAt).getTime(),
  },
  dateOldestFirst: {
    label: 'Date (Oldest first)',
    sortingFn: (itemA, itemB) =>
      new Date(itemA.sys.firstPublishedAt).getTime() -
      new Date(itemB.sys.firstPublishedAt).getTime(),
  },
};

// Components
const gridWrapper = css`
  display: grid;
  grid-gap: ${rem(gutterWidths.xs / 2)};
  padding: ${rem(gutterWidths.xs / 2)} ${rem(gutterWidths.xs / 2)} 0;

  @media ${mediaQueries.md} {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${rem(gutterWidths.md / 2)};
    padding: ${rem(gutterWidths.md / 2)} ${rem(gutterWidths.md / 2)} 0;
  }

  @media ${mediaQueries.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SortControls = styled.div`
  ${gridWrapper}
  text-align: left;
`;

export const SelectLabel = styled.label`
  margin-right: ${rem(8)};
`;

export const SelectInput = styled.div`
  flex-grow: 1;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;

  @media ${mediaQueries.md} {
    grid-column-start: 2;
  }

  @media ${mediaQueries.lg} {
    grid-column-start: 3;
  }
`;

export const List = styled.ul`
  ${listReset}
  ${gridWrapper}
`;
