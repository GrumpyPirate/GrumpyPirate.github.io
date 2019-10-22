import React, { FunctionComponent } from 'react';

import { ChildrenProps } from 'types';

import classes from './PageContent.component.scss';

const PageContent: FunctionComponent<ChildrenProps> = ({ children }: ChildrenProps) => (
  <div className={classes['page-content']}>{children}</div>
);

export default PageContent;
