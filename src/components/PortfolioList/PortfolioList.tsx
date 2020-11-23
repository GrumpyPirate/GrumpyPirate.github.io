import { useQuery } from '@apollo/client';
import Color from 'color';
import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import Select, { ValueType } from 'react-select';

import PortfolioListing from 'components/PortfolioListing/PortfolioListing';
import { GET_PORTFOLIO_ITEM_LIST, GetPortfolioItemsResponse } from 'queries';
import { palette, rem } from 'styles';

import {
  List,
  SelectInput,
  SelectLabel,
  SelectWrapper,
  SortControls,
  sortingStrategies,
} from './PortfolioList.constants';
import { PortfolioItemSortingStrategy } from './PortfolioList.types';

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
    <>
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
    </>
  );
};

export default PortfolioList;
