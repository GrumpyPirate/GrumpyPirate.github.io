import {
  ABOUT_SECTIONS_LOAD,
  ABOUT_SECTIONS_RECEIVE,
  ABOUT_SECTIONS_REQUEST_FAILED,
} from 'actions/about/about';

const defaultState = {
  aboutSections: [],
  isFetching: false,
  hasFetched: false,
  fetchCount: 0,
  error: null,
  errorCount: 0,
};

const aboutReducer = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case ABOUT_SECTIONS_LOAD:
      return {
        ...state,
        isFetching: true,
      };
    case ABOUT_SECTIONS_RECEIVE:
      return {
        ...state,
        aboutSections: action.aboutSections,
        isFetching: false,
        hasFetched: true,
        fetchCount: state.fetchCount + 1,
      };
    case ABOUT_SECTIONS_REQUEST_FAILED:
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

export default aboutReducer;

export { defaultState };
