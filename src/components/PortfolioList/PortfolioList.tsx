import { useQuery } from '@apollo/client';
import Color from 'color';
import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import Select, { ValueType } from 'react-select';

import PortfolioListing from 'components/PortfolioListing/PortfolioListing';
import {
  GET_PORTFOLIO_ITEM_LIST,
  GetPortfolioItemsResponse,
  GetPortfolioItemsResponseItem,
} from 'queries';
import { palette, rem } from 'styles';

import {
  List,
  SelectInput,
  SelectLabel,
  SelectWrapper,
  SortControls,
} from './PortfolioList.constants';

interface PortfolioItemSortingStrategy {
  label: string;
  sortingFn: (a: GetPortfolioItemsResponseItem, b: GetPortfolioItemsResponseItem) => number;
}

interface PortfolioItemSortingStrategyConfig {
  [key: string]: PortfolioItemSortingStrategy;
}

const sortingStrategies: PortfolioItemSortingStrategyConfig = {
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

const PortfolioList: FunctionComponent = () => {
  const { data: { portfolioItemCollection: { items: portfolioItems = [] } = {} } = {} } = useQuery<
    GetPortfolioItemsResponse
  >(GET_PORTFOLIO_ITEM_LIST);
  const [
    currentSortingStrategy,
    setCurrentSortingStrategy,
  ] = useState<PortfolioItemSortingStrategy | null>(sortingStrategies.dateNewestFirst);

  const availableSortingSelectOptions = useMemo(
    () =>
      Object.entries(sortingStrategies).map(([id, { label }]) => ({
        value: id,
        label,
      })),
    [],
  );
  const sortedPortfolioItems = useMemo(
    () =>
      [...portfolioItems].sort(
        currentSortingStrategy
          ? currentSortingStrategy.sortingFn
          : sortingStrategies.dateNewestFirst.sortingFn,
      ),
    [currentSortingStrategy, portfolioItems],
  );

  const onSelectChange = useCallback((option: ValueType<{ value: string; label: string }>) => {
    if (!!option && 'value' in option) {
      setCurrentSortingStrategy(sortingStrategies[option.value]);
    }
  }, []);

  return (
    <div>
      <SortControls>
        <SelectWrapper>
          <SelectLabel htmlFor="sort-select">Sort by:</SelectLabel>
          <SelectInput>
            <Select
              defaultValue={availableSortingSelectOptions[0]}
              inputId="sort-select"
              isSearchable={false}
              onChange={onSelectChange}
              options={availableSortingSelectOptions}
              placeholder="Sort by..."
              styles={{
                control: (provided) => ({
                  ...provided,
                  borderRadius: rem(4),
                }),
                menu: (provided) => ({
                  ...provided,
                  borderRadius: rem(4),
                }),
              }}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: palette.themeMainBrand,
                  primary75: Color('#fff').mix(Color(palette.themeMainBrand), 0.75).string(),
                  primary50: Color('#fff').mix(Color(palette.themeMainBrand), 0.5).string(),
                  primary25: Color('#fff').mix(Color(palette.themeMainBrand), 0.25).string(),
                },
              })}
            />
          </SelectInput>
        </SelectWrapper>
      </SortControls>
      <List>
        {sortedPortfolioItems.map(
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
      </List>
    </div>
  );
};

export default PortfolioList;
