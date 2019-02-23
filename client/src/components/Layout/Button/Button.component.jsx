import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Button.component.scss';

const Button = ({
  to,
  external,
  children,
  primary,
  secondary,
  ...rest
}) => {
  const isInternalLink = Boolean(to && !external);
  const isExternalLink = Boolean(to && external);
  const classNames = classnames(
    classes['button'], {
      [classes['button--primary']]: primary,
      [classes['button--secondary']]: secondary,
    },
  );

  if (isInternalLink) {
    return (
      <Link to={to} className={classNames} {...rest}>
        {children}
      </Link>
    );
  }

  if (isExternalLink) {
    return (
      <a href={to} className={classNames} target="_blank" rel="noreferrer noopener" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  to: null,
  external: false,
  primary: true,
  secondary: false,
};

export default Button;
