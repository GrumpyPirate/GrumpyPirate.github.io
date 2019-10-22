import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { UIState } from './ui';

const CLOSE_MOBILE_NAVIGATION = 'CLOSE_MOBILE_NAVIGATION';
const OPEN_MOBILE_NAVIGATION = 'OPEN_MOBILE_NAVIGATION';
const TOGGLE_MOBILE_NAVIGATION = 'TOGGLE_MOBILE_NAVIGATION';

const closeMobileNavigation = (): Action => ({
  type: CLOSE_MOBILE_NAVIGATION,
});

const openMobileNavigation = (): Action => ({
  type: OPEN_MOBILE_NAVIGATION,
});

const toggleMobileNavigation = (): ThunkAction<{}, UIState, {}, AnyAction> => (
  dispatch: Dispatch<AnyAction>,
  getState: Function,
): any => {
  const {
    ui: { isMobileNavigationOpen },
  } = getState();

  return isMobileNavigationOpen
    ? dispatch(closeMobileNavigation())
    : dispatch(openMobileNavigation());
};

export {
  CLOSE_MOBILE_NAVIGATION,
  OPEN_MOBILE_NAVIGATION,
  TOGGLE_MOBILE_NAVIGATION,
  closeMobileNavigation,
  openMobileNavigation,
  toggleMobileNavigation,
};
