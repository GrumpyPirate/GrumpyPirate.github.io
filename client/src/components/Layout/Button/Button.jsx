import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Button.scss';

const Button = ({ to, children, ...rest }) => {
  const isLink = Boolean(to);

  if (isLink) {
    return <Link to={to} className={classes['button']} {...rest}>{children}</Link>;
  }

  return <button type="button" className={classes['button']} {...rest}>{children}</button>;
};

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  to: null,
};

export default Button;
