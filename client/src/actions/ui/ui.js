const CLOSE_MOBILE_NAVIGATION = 'CLOSE_MOBILE_NAVIGATION';
const OPEN_MOBILE_NAVIGATION = 'OPEN_MOBILE_NAVIGATION';
const TOGGLE_MOBILE_NAVIGATION = 'TOGGLE_MOBILE_NAVIGATION';

const closeMobileNavigation = () => ({
  type: CLOSE_MOBILE_NAVIGATION,
});

const openMobileNavigation = () => ({
  type: OPEN_MOBILE_NAVIGATION,
});

const toggleMobileNavigation = () => (dispatch, getState) => {
  const { ui: { isMobileNavigationOpen } } = getState();

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
