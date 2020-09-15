import { Action } from 'redux';

import { GenericActionError, PortfolioItemFormatted } from 'types/common';

export interface PortfolioState {
  portfolioItems: PortfolioItemFormatted[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchCount: number;
  error: GenericActionError;
  errorCount: number;
}

export interface RecievePortfolioItemsAction extends Action {
  portfolioItems: PortfolioItemFormatted[];
}

export interface FailedPortfolioItemsRequestAction extends Action {
  error: GenericActionError;
}

export type PortfolioAction =
  | Action
  | RecievePortfolioItemsAction
  | FailedPortfolioItemsRequestAction;
