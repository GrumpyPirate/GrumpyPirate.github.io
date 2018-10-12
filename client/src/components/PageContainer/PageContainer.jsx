import React from 'react';
import PropTypes from 'prop-types';

import './PageContainer.scss';

const PageContainer = ({ children }) => (
  <div className="page">{children}</div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
