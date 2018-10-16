import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Column.scss';

const Column = ({
  span,
  spanXS,
  spanSM,
  spanMD,
  spanLG,
  spanXL,
  children,
}) => (
  <div
    className={classnames(
      classes.column, {
        [classes[`column-${span}`]]: span,
        [classes[`column-xs-${spanXS}`]]: spanXS,
        [classes[`column-sm-${spanSM}`]]: spanSM,
        [classes[`column-md-${spanMD}`]]: spanMD,
        [classes[`column-lg-${spanLG}`]]: spanLG,
        [classes[`column-xl-${spanXL}`]]: spanXL,
      },
    )}
  >
    {children}
  </div>
);

Column.propTypes = {
  span: PropTypes.number,
  spanXS: PropTypes.number,
  spanSM: PropTypes.number,
  spanMD: PropTypes.number,
  spanLG: PropTypes.number,
  spanXL: PropTypes.number,
  children: PropTypes.node,
};

Column.defaultProps = {
  span: null,
  spanXS: null,
  spanSM: null,
  spanMD: null,
  spanLG: null,
  spanXL: null,
  children: null,
};

export default Column;
