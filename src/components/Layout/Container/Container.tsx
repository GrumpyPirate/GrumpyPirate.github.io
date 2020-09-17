import React, { FunctionComponent } from 'react';

import { ChildrenProps } from 'types/common';

import classes from './Container.scss';

const Container: FunctionComponent<ChildrenProps> = ({ children }) => (
  <div className={classes['container']}>{children}</div>
);

export default Container;
