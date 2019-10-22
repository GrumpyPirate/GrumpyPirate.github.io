import { Action } from 'redux';

import { GenericActionError } from 'store';
import { PortfolioItemFormatted } from 'types';

interface PortfolioState {
  portfolioItems: PortfolioItemFormatted[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchCount: number;
  error: GenericActionError;
  errorCount: number;
}

interface RecievePortfolioItemsAction extends Action {
  portfolioItems: PortfolioItemFormatted[];
}

interface FailedPortfolioItemsRequestAction extends Action {
  error: GenericActionError;
}

type PortfolioAction = Action | RecievePortfolioItemsAction | FailedPortfolioItemsRequestAction;

export {
  PortfolioAction,
  PortfolioState,
  RecievePortfolioItemsAction,
  FailedPortfolioItemsRequestAction,
};
