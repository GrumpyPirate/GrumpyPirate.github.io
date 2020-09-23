import { configureStore } from '@reduxjs/toolkit';
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import store, { initialRootState, rootReducer, RootState } from 'store';

export const createMockStore = (customState: Partial<RootState> = {}): typeof store =>
  configureStore({
    reducer: rootReducer,
    preloadedState: {
      ...initialRootState,
      ...customState,
    },
  });

export const withMockRouter = (
  children: ReactNode,
  initialEntries?: MemoryRouterProps['initialEntries'],
): ReactElement => {
  return (
    <MemoryRouter initialEntries={initialEntries || [{ pathname: '/', key: 'a-static-key' }]}>
      {children}
    </MemoryRouter>
  );
};

/**
 * Wraps some provided JSX in a Redux store Provider, for use in testing connected components with
 * RTL.
 *
 * @param {ReactElement} children
 * @param {Partial<RootState>} customState
 *
 * @returns {RenderResult}
 */
export const withMockStore = (
  children: ReactElement,
  customState: Partial<RootState> = {},
): ReactElement => {
  const mockStore = createMockStore(customState);

  return <Provider store={mockStore}>{children}</Provider>;
};
