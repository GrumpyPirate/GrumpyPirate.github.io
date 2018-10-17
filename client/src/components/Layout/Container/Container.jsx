import React from 'react';
import PropTypes from 'prop-types';

import classes from './Container.scss';

const Container = ({ children }) => (
  <div className={classes.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default Container;