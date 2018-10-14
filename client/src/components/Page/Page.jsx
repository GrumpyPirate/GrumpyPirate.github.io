import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Page.scss';

const Page = ({ children }) => (
  <div className="page">{children}</div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(Page);
