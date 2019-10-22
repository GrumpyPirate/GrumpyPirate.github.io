import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Column.component.scss';

const Column = ({
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
}) => (
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

const spanTypes = [PropTypes.oneOf(['auto']), PropTypes.number];

Column.propTypes = {
  span: PropTypes.oneOfType(spanTypes),
  spanSM: PropTypes.oneOfType(spanTypes),
  spanMD: PropTypes.oneOfType(spanTypes),
  spanLG: PropTypes.oneOfType(spanTypes),
  spanXL: PropTypes.oneOfType(spanTypes),
  push: PropTypes.number,
  pushSM: PropTypes.number,
  pushMD: PropTypes.number,
  pushLG: PropTypes.number,
  pushXL: PropTypes.number,
  pull: PropTypes.number,
  pullSM: PropTypes.number,
  pullMD: PropTypes.number,
  pullLG: PropTypes.number,
  pullXL: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Column.defaultProps = {
  span: null,
  spanSM: null,
  spanMD: null,
  spanLG: null,
  spanXL: null,
  push: null,
  pushSM: null,
  pushMD: null,
  pushLG: null,
  pushXL: null,
  pull: null,
  pullSM: null,
  pullMD: null,
  pullLG: null,
  pullXL: null,
};

export default Column;
