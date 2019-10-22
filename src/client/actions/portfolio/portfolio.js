import contentService from 'services/ContentService';

const PORTFOLIO_ITEMS_LOAD = 'PORTFOLIO_ITEMS_LOAD';
const PORTFOLIO_ITEMS_REQUEST = 'PORTFOLIO_ITEMS_REQUEST';
const PORTFOLIO_ITEMS_RECEIVE = 'PORTFOLIO_ITEMS_RECEIVE';
const PORTFOLIO_ITEMS_REQUEST_FAILED = 'PORTFOLIO_ITEMS_REQUEST_FAILED';

const loadPortfolioItems = () => ({
  type: PORTFOLIO_ITEMS_LOAD,
});

const recievePortfolioItems = portfolioItems => ({
  type: PORTFOLIO_ITEMS_RECEIVE,
  portfolioItems,
});

const failedPortfolioItemsRequest = error => ({
  type: PORTFOLIO_ITEMS_REQUEST_FAILED,
  error,
});

const requestPortfolioItems = () => dispatch => {
  dispatch(loadPortfolioItems());

  return contentService
    .getPortfolioItems()
    .then(items => dispatch(recievePortfolioItems(items)))
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
