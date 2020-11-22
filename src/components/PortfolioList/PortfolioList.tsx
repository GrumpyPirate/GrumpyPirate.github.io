import { useQuery } from '@apollo/client';
import React, { FunctionComponent, useMemo } from 'react';
import styled from 'styled-components';

import PortfolioListing from 'components/PortfolioListing/PortfolioListing';
import { GET_PORTFOLIO_ITEM_LIST, GetPortfolioItemsResponse } from 'queries';
import { gutterWidths, listReset, mediaQueries, rem } from 'styles';
import { PropsWithClassName } from 'types/common';

const PortfolioList: FunctionComponent<PropsWithClassName> = ({ className }) => {
  const { data } = useQuery<GetPortfolioItemsResponse>(GET_PORTFOLIO_ITEM_LIST);

  const formattedPortfolioItems = useMemo(
    () =>
      !data
        ? []
        : [...data.portfolioItemCollection.items].sort(
            (itemA, itemB) =>
              new Date(itemB.sys.firstPublishedAt).getTime() -
              new Date(itemA.sys.firstPublishedAt).getTime(),
          ),
    [data],
  );

  return (
    <ul className={className}>
      {formattedPortfolioItems.map(
        (
          { sys: { id }, slug, headerImage: { url: headerImageUrl }, title, descriptionShort },
          index,
        ) => (
          <PortfolioListing
            key={`portfolio-page__list__item--${slug}--${id}`}
            description={descriptionShort}
            headerImageUrl={headerImageUrl}
            id={id}
            slug={slug}
            title={title}
            index={index}
          />
        ),
      )}
    </ul>
  );
};

export default styled(PortfolioList)`
  ${listReset}
  display: grid;
  grid-gap: ${rem(gutterWidths.xs / 2)};
  padding: ${rem(gutterWidths.xs / 2)} ${rem(gutterWidths.xs / 2)} 0;

  @media ${mediaQueries.md} {
    grid-template-columns: 1fr 1fr;
    padding: ${rem(gutterWidths.md / 2)} ${rem(gutterWidths.md / 2)} 0;
  }

  @media ${mediaQueries.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
