import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import classes from './Row.scss';
import { RowProps } from './Row.types';

const Row: FunctionComponent<RowProps> = ({
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
    className={classnames(classes.row, {
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
    })}
  >
    {children}
  </div>
);

export default Row;
