import React from 'react';
import PropTypes from 'prop-types';

import classes from './PortfolioPageContent.component.scss';

const PortfolioPageContent = ({ children }) => (
  <div className={classes['portfolio-page-content']}>{children}</div>
);

PortfolioPageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortfolioPageContent;
