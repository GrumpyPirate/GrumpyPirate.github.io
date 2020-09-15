import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { ColumnProps } from './Column.component.types';
import classes from './Column.component.scss';

const Column: FunctionComponent<ColumnProps> = ({
  span,
  spanSM,
  spanMD,
  spanLG,
  spanXL,
  push,
  pushSM,
  pushMD,
  pushLG,
  pushXL,
  pull,
  pullSM,
  pullMD,
  pullLG,
  pullXL,
  children,
}: ColumnProps) => (
  <div
    className={classnames(classes.column, {
      [classes[`column-${span}`]]: span,
      [classes[`column-sm-${spanSM}`]]: spanSM,
      [classes[`column-md-${spanMD}`]]: spanMD,
      [classes[`column-lg-${spanLG}`]]: spanLG,
      [classes[`column-xl-${spanXL}`]]: spanXL,
      [classes[`column-push-${push}`]]: push,
      [classes[`column-push-sm-${pushSM}`]]: pushSM,
      [classes[`column-push-md-${pushMD}`]]: pushMD,
      [classes[`column-push-lg-${pushLG}`]]: pushLG,
      [classes[`column-push-xl-${pushXL}`]]: pushXL,
      [classes[`column-push-${pull}`]]: pull,
      [classes[`column-pull-sm-${pullSM}`]]: pullSM,
      [classes[`column-pull-md-${pullMD}`]]: pullMD,
      [classes[`column-pull-lg-${pullLG}`]]: pullLG,
      [classes[`column-pull-xl-${pullXL}`]]: pullXL,
    })}
  >
    {children}
  </div>
);

export default Column;
