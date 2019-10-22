import {
  ABOUT_SECTIONS_LOAD,
  ABOUT_SECTIONS_RECEIVED,
  ABOUT_SECTIONS_REQUEST_FAILED,
} from 'store/about/about.actions';
import { AboutState } from './about.d';
import { AnyAction } from 'redux';

const defaultState: AboutState = {
  aboutSections: [],
  isFetching: false,
  hasFetched: false,
  fetchCount: 0,
  error: {},
  errorCount: 0,
};

const aboutReducer = (state = defaultState, action: AnyAction) => {
  const { type } = action;

  switch (type) {
    case ABOUT_SECTIONS_LOAD:
      return {
        ...state,
        isFetching: true,
      };
    case ABOUT_SECTIONS_RECEIVED:
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
