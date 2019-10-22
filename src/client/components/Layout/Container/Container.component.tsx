import React, { FunctionComponent } from 'react';

import { ChildrenProps } from 'types';

import classes from './Container.component.scss';

const Container: FunctionComponent<ChildrenProps> = ({ children }: ChildrenProps) => (
  <div className={classes['container']}>{children}</div>
);

export default Container;
