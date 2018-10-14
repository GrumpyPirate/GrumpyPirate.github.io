import React from 'react';
import PropTypes from 'prop-types';

import './PageContent.scss';

const PageContent = ({ children }) => (
  <div className="page-content">{children}</div>
);

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
