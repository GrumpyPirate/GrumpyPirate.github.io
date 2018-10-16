import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/Icon/Icon';

import classes from './Spinner.scss';

const Spinner = ({ isLoading }) => (
  <div
    className={classnames(classes['spinner'], {
      [classes['spinner--is-loading']]: isLoading,
    })}
  >
    <figure className={classes['spinner__icon']}>
      <Icon glyph="loader" altText="Loading..." />
    </figure>

    <h6 className={classes['spinner__loading-text']}>Loading...</h6>
  </div>
);

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
