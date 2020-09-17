import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';

import { initialRootState, rootReducer, RootState } from 'store';

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
  const store = createStore(rootReducer, {
    ...initialRootState,
    ...customState,
  });

  return <Provider store={store}>{children}</Provider>;
};
