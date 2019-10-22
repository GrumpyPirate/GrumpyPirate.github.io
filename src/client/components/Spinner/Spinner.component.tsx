import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import Icon from 'components/Icon/Icon.component';

import { SpinnerProps } from './Spinner.component.d';
import classes from './Spinner.component.scss';

const Spinner: FunctionComponent<SpinnerProps> = ({ isLoading = false }: SpinnerProps) => (
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
export default Spinner;
