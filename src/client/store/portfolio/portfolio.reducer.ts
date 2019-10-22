import {
  PORTFOLIO_ITEMS_LOAD,
  PORTFOLIO_ITEMS_RECEIVE,
  PORTFOLIO_ITEMS_REQUEST_FAILED,
} from './portfolio.actions';
import { PortfolioState } from './portfolio';
import { AnyAction } from 'redux';

const defaultState: PortfolioState = {
  portfolioItems: [],
  isFetching: false,
  hasFetched: false,
  fetchCount: 0,
  error: {},
  errorCount: 0,
};

const portfolioReducer = (state: PortfolioState = defaultState, action: AnyAction) => {
  const { type } = action;

  switch (type) {
    case PORTFOLIO_ITEMS_LOAD:
      return {
        ...state,
        isFetching: true,
      };
    case PORTFOLIO_ITEMS_RECEIVE:
      return {
        ...state,
        portfolioItems: action.portfolioItems,
        isFetching: false,
        hasFetched: true,
        fetchCount: state.fetchCount + 1,
      };
    case PORTFOLIO_ITEMS_REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        fetchCount: state.fetchCount + 1,
        error: action.error,
        errorCount: state.errorCount + 1,
      };
    default:
      return state;
  }
};
export default portfolioReducer;
export { defaultState };
