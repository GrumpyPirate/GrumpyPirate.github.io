import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.scss';
import { ButtonProps } from './Button.types';

const Button: FunctionComponent<ButtonProps> = ({
  children,
  external,
  primary,
  secondary,
  to = '',
}) => {
  const isInternalLink = Boolean(to && !external);
  const isExternalLink = Boolean(to && external);
  const classNames = classnames(classes['button'], {
    [classes['button--primary']]: primary,
    [classes['button--secondary']]: secondary,
  });

  if (isInternalLink) {
    return (
      <Link to={to} className={classNames}>
        {children}
      </Link>
    );
  }

  if (isExternalLink) {
    return (
      <a href={to} className={classNames} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames}>
      {children}
    </button>
  );
};

export default Button;
