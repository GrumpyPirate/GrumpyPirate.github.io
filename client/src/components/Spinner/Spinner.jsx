import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/Icon/Icon';

import './Spinner.scss';

const Spinner = ({ isLoading }) => (
  <div
    className={classnames('spinner', {
      'spinner--is-loading': isLoading,
    })}
  >
    <figure className="spinner__icon">
      <Icon glyph="loader" altText="Loading..." />
    </figure>

    <h6 className="h4 mb-0">Loading...</h6>
  </div>
);

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
