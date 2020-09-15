import React from 'react';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

export default {
  children: <div>Test</div>,
  closeMobileNavigation: () => null,
  history,
  isLoading: false,
  isMobileNavigationOpen: false,
  location: {
    pathname: 'rage-unmajestic/slantly-involvent',
    search: '',
    state: '',
    hash: '',
  },
  match: {
    params: '',
    isExact: true,
    path: '',
    url: '',
  },
  renderLocation: () => <div>Test Location</div>,
};
