import contentService from 'services/ContentService';

// Actions
const LOAD_PORTFOLIO_ITEMS = 'LOAD_PORTFOLIO_ITEMS';
const REQUEST_PORTFOLIO_ITEMS = 'REQUEST_PORTFOLIO_ITEMS';
const RECEIVE_PORTFOLIO_ITEMS = 'RECEIVE_PORTFOLIO_ITEMS';
const FAILED_PORTFOLIO_ITEMS_REQUEST = 'FAILED_PORTFOLIO_ITEMS_REQUEST';

// Action creators
const loadPortfolioItems = () => ({
  type: LOAD_PORTFOLIO_ITEMS,
});

const recievePortfolioItems = portfolioItems => ({
  type: RECEIVE_PORTFOLIO_ITEMS,
  portfolioItems,
});

const failedPortfolioItemsRequest = error => ({
  type: FAILED_PORTFOLIO_ITEMS_REQUEST,
  error,
});

// Thunks
const requestPortfolioItems = () => (dispatch) => {
  dispatch(loadPortfolioItems());

  return contentService.getPortfolioItems()
    .then(items => dispatch(recievePortfolioItems(items)))
    .catch(error => dispatch(failedPortfolioItemsRequest(error)));
};

export {
  LOAD_PORTFOLIO_ITEMS,
  REQUEST_PORTFOLIO_ITEMS,
  RECEIVE_PORTFOLIO_ITEMS,
  FAILED_PORTFOLIO_ITEMS_REQUEST,
  loadPortfolioItems,
  recievePortfolioItems,
  failedPortfolioItemsRequest,
  requestPortfolioItems,
};
