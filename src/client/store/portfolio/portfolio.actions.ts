import contentService, { ContentService } from 'services/ContentService';

import { PortfolioItemFormatted } from 'types';
import { GenericActionError } from 'store';

import {
  FailedPortfolioItemsRequestAction,
  RecievePortfolioItemsAction,
  PortfolioState,
  PortfolioAction,
} from './portfolio.d';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const PORTFOLIO_ITEMS_LOAD = 'PORTFOLIO_ITEMS_LOAD';
const PORTFOLIO_ITEMS_REQUEST = 'PORTFOLIO_ITEMS_REQUEST';
const PORTFOLIO_ITEMS_RECEIVE = 'PORTFOLIO_ITEMS_RECEIVE';
const PORTFOLIO_ITEMS_REQUEST_FAILED = 'PORTFOLIO_ITEMS_REQUEST_FAILED';

const loadPortfolioItems = () => ({
  type: PORTFOLIO_ITEMS_LOAD,
});

const recievePortfolioItems = (
  portfolioItems: PortfolioItemFormatted[],
): RecievePortfolioItemsAction => ({
  type: PORTFOLIO_ITEMS_RECEIVE,
  portfolioItems,
});

const failedPortfolioItemsRequest = (
  error: GenericActionError,
): FailedPortfolioItemsRequestAction => ({
  type: PORTFOLIO_ITEMS_REQUEST_FAILED,
  error,
});

const requestPortfolioItems = (
  service: ContentService = contentService,
): ThunkAction<{}, PortfolioState, {}, PortfolioAction> => (
  dispatch: ThunkDispatch<{}, {}, PortfolioAction>,
): Promise<PortfolioAction> => {
  dispatch(loadPortfolioItems());

  return service
    .getPortfolioItems()
    .then((items: PortfolioItemFormatted[]) => dispatch(recievePortfolioItems(items)))
    .catch(error => dispatch(failedPortfolioItemsRequest(error)));
};

export {
  PORTFOLIO_ITEMS_LOAD,
  PORTFOLIO_ITEMS_REQUEST,
  PORTFOLIO_ITEMS_RECEIVE,
  PORTFOLIO_ITEMS_REQUEST_FAILED,
  loadPortfolioItems,
  recievePortfolioItems,
  failedPortfolioItemsRequest,
  requestPortfolioItems,
};
