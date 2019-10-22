import React, { FunctionComponent } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'store/reducers';

import { ChildrenProps } from 'types';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

/**
 * Wraps children in a Redux store provider.
 *
 * @param {ChildrenProps} props
 *
 * @returns {ReactNode}
 */
const Store: FunctionComponent<ChildrenProps> = ({ children }: ChildrenProps) => (
  <Provider store={store}>{children}</Provider>
);

export default Store;
