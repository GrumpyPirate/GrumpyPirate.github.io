import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import { ChildrenProps } from 'types/common';

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
