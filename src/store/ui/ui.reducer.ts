import { AnyAction } from 'redux';

import { CLOSE_MOBILE_NAVIGATION, OPEN_MOBILE_NAVIGATION } from 'store/ui/ui.actions';

import { UIState } from './ui.types';

const defaultState: UIState = {
  isMobileNavigationOpen: false,
};

const uiReducer = (state: UIState = defaultState, action: AnyAction): UIState => {
  switch (action.type) {
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
