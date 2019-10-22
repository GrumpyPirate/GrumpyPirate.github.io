import { OPEN_MOBILE_NAVIGATION, CLOSE_MOBILE_NAVIGATION } from 'store/ui/ui.actions';
import { Action } from 'redux';

import { UIState } from './ui.d';

const defaultState: UIState = {
  isMobileNavigationOpen: false,
};

const uiReducer = (state: UIState = defaultState, action: Action) => {
  const { type } = action;

  switch (type) {
    case OPEN_MOBILE_NAVIGATION:
      return { ...state, isMobileNavigationOpen: true };
    case CLOSE_MOBILE_NAVIGATION:
      return { ...state, isMobileNavigationOpen: false };
    default:
      return state;
  }
};

export default uiReducer;
export { defaultState };
