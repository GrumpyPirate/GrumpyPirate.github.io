import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Row.scss';

const Row = ({ align, justify, children }) => (
  <div
    className={classnames(
      classes.row, {
        [classes[`row--align-${align}`]]: align,
        [classes[`row--justify-${justify}`]]: justify,
      },
    )}
  >
    {children}
  </div>
);

Row.propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  justify: PropTypes.oneOf(['left', 'center', 'right', 'space-between', 'space-around']),
  children: PropTypes.node,
};

Row.defaultProps = {
  align: null,
  justify: null,
  children: null,
};

export default Row;
