import React, { FunctionComponent } from 'react';

import { ChildrenProps } from 'types/common';

import classes from './PageContent.scss';

const PageContent: FunctionComponent<ChildrenProps> = ({ children }) => (
  <div className={classes['page-content']}>{children}</div>
);

export default PageContent;
