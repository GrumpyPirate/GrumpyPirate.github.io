import React from 'react';
import PropTypes from 'prop-types';

import './PageHeader.scss';

// Component
const PageHeader = ({ title, children }) => (
  <header className="page-header text-center last-child-mb-0">
    <div className="page-header__title">
      <div className="container-fluid">
        <h1 className="page-header__title__text">
          <div className="container-fluid">{title}</div>
        </h1>
      </div>
    </div>

    {!!children && (
      <div className="page-header__subtitle">
        {children}
      </div>
    )}
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  children: null,
};

export default PageHeader;
