import React from 'react';
import PropTypes from 'prop-types';

import classes from './PageContent.component.scss';

const PageContent = ({ children }) => <div className={classes['page-content']}>{children}</div>;

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
