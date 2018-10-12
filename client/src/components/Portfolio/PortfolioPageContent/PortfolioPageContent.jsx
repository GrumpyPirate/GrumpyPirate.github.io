import React from 'react';
import PropTypes from 'prop-types';

const PortfolioPageContent = ({ children }) => (
  <div className="pf-page__content py-2 py-md-4">
    {children}
  </div>
);

PortfolioPageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortfolioPageContent;
