import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import Icon from 'components/Icon/Icon';
import { RootState } from 'store';

import classes from './Spinner.scss';

const Spinner: FunctionComponent = () => {
  const isLoading = useSelector((state: RootState) => state.portfolio.isFetching);

  return (
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
};
export default Spinner;
