import { GetPortfolioItemsResponseItem } from 'queries';

export interface PortfolioItemSortingStrategy {
  label: string;
  sortingFn: (a: GetPortfolioItemsResponseItem, b: GetPortfolioItemsResponseItem) => number;
}

export interface PortfolioItemSortingStrategyConfig {
  [key: string]: PortfolioItemSortingStrategy;
}
