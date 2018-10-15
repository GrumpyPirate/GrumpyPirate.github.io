import { OPEN_MOBILE_NAVIGATION, CLOSE_MOBILE_NAVIGATION } from 'actions/ui/ui';

const defaultState = {
  isMobileNavigationOpen: false,
};

const uiReducer = (state = defaultState, action) => {
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
