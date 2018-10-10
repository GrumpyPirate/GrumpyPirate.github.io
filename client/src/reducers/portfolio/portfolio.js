import {
  LOAD_PORTFOLIO_ITEMS,
  RECEIVE_PORTFOLIO_ITEMS,
  FAILED_PORTFOLIO_ITEMS_REQUEST
} from 'actions/portfolio/portfolio'

const defaultState = {
  portfolioItems: [],
  isFetching: false,
  hasFetched: false,
  fetchCount: 0,
  error: '',
  errorCount: 0
}

const portfolioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_PORTFOLIO_ITEMS:
      return {
        ...state,
        isFetching: true,
        hasFetched: true
      }
    case RECEIVE_PORTFOLIO_ITEMS:
      return {
        ...state,
        portfolioItems: action.portfolioItems,
        isFetching: false,
        fetchCount: state.fetchCount++
      }
    case FAILED_PORTFOLIO_ITEMS_REQUEST:
      return {
        ...state,
        isFetching: false,
        fetchCount: state.fetchCount++,
        error: action.error,
        errorCount: state.errorCount++
      }
    default:
      return state
  }
}

export default portfolioReducer
export { defaultState }
