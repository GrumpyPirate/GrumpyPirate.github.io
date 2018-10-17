import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Row.scss';

const alignModes = ['top', 'middle', 'bottom'];
const justifyModes = ['left', 'center', 'right', 'space-between', 'space-around'];

const Row = ({
  align,
  alignSM,
  alignMD,
  alignLG,
  alignXL,
  justify,
  justifySM,
  justifyMD,
  justifyLG,
  justifyXL,
  children,
}) => (
  <div
    className={classnames(
      classes.row, {
        [classes[`row--align-${align}`]]: align,
        [classes[`row--align-sm-${alignSM}`]]: alignSM,
        [classes[`row--align-md-${alignMD}`]]: alignMD,
        [classes[`row--align-lg-${alignLG}`]]: alignLG,
        [classes[`row--align-xl-${alignXL}`]]: alignXL,
        [classes[`row--justify-${justify}`]]: justify,
        [classes[`row--justify-sm-${justifySM}`]]: justifySM,
        [classes[`row--justify-md-${justifyMD}`]]: justifyMD,
        [classes[`row--justify-lg-${justifyLG}`]]: justifyLG,
        [classes[`row--justify-xl-${justifyXL}`]]: justifyXL,
      },
    )}
  >
    {children}
  </div>
);

Row.propTypes = {
  align: PropTypes.oneOf(alignModes),
  alignSM: PropTypes.oneOf(alignModes),
  alignMD: PropTypes.oneOf(alignModes),
  alignLG: PropTypes.oneOf(alignModes),
  alignXL: PropTypes.oneOf(alignModes),
  justify: PropTypes.oneOf(justifyModes),
  justifySM: PropTypes.oneOf(justifyModes),
  justifyMD: PropTypes.oneOf(justifyModes),
  justifyLG: PropTypes.oneOf(justifyModes),
  justifyXL: PropTypes.oneOf(justifyModes),
  children: PropTypes.node,
};

Row.defaultProps = {
  align: null,
  alignSM: null,
  alignMD: null,
  alignLG: null,
  alignXL: null,
  justify: null,
  justifySM: null,
  justifyMD: null,
  justifyLG: null,
  justifyXL: null,
  children: null,
};

export default Row;
