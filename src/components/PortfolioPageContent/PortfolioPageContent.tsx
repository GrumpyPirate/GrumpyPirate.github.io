import React, { FunctionComponent } from 'react';

import { ChildrenProps } from 'types/common';

import classes from './PortfolioPageContent.scss';

const PortfolioPageContent: FunctionComponent<ChildrenProps> = ({ children }) => (
  <div className={classes['portfolio-page-content']}>{children}</div>
);

export default PortfolioPageContent;
