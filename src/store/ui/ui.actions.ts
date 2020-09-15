import { Action } from 'redux';

import { AppThunk } from 'types/common';

import { UIState } from './ui.types';

const CLOSE_MOBILE_NAVIGATION = 'CLOSE_MOBILE_NAVIGATION';
const OPEN_MOBILE_NAVIGATION = 'OPEN_MOBILE_NAVIGATION';
const TOGGLE_MOBILE_NAVIGATION = 'TOGGLE_MOBILE_NAVIGATION';

const closeMobileNavigation = (): Action => ({
  type: CLOSE_MOBILE_NAVIGATION,
});

const openMobileNavigation = (): Action => ({
  type: OPEN_MOBILE_NAVIGATION,
});

const toggleMobileNavigation = (): AppThunk => (dispatch, getState: () => { ui: UIState }) => {
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
