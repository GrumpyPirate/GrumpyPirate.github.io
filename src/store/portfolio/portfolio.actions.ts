import { AnyAction } from 'redux';

import contentService, { ContentService } from 'services/ContentService';
import { AppThunk, GenericActionError, PortfolioItemFormatted } from 'types/common';

const PORTFOLIO_ITEMS_LOAD = 'PORTFOLIO_ITEMS_LOAD';
const PORTFOLIO_ITEMS_REQUEST = 'PORTFOLIO_ITEMS_REQUEST';
const PORTFOLIO_ITEMS_RECEIVE = 'PORTFOLIO_ITEMS_RECEIVE';
const PORTFOLIO_ITEMS_REQUEST_FAILED = 'PORTFOLIO_ITEMS_REQUEST_FAILED';

const loadPortfolioItems = (): AnyAction => ({
  type: PORTFOLIO_ITEMS_LOAD,
});

const recievePortfolioItems = (portfolioItems: PortfolioItemFormatted[]): AnyAction => ({
  type: PORTFOLIO_ITEMS_RECEIVE,
  portfolioItems,
});

const failedPortfolioItemsRequest = (error: GenericActionError): AnyAction => ({
  type: PORTFOLIO_ITEMS_REQUEST_FAILED,
  error,
});

const requestPortfolioItems = (service: ContentService = contentService): AppThunk => (
  dispatch,
) => {
  dispatch(loadPortfolioItems());

  return service
    .getPortfolioItems()
    .then((items: PortfolioItemFormatted[]) => dispatch(recievePortfolioItems(items)))
    .catch((error) => dispatch(failedPortfolioItemsRequest(error)));
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
