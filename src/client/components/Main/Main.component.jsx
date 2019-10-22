import React, { createRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import usePrevious from 'hooks/usePrevious';

import Spinner from 'components/Spinner/Spinner.container';

import classes from './Main.component.scss';

const Main = ({
  history,
  isLoading,
  isMobileNavigationOpen,
  location,
  renderLocation,
  closeMobileNavigation,
  children,
}) => {
  const mainElement = createRef();
  const { pathname } = location;
  const prevPathname = usePrevious(pathname);

  useEffect(() => {
    history.listen(() => {
      const { action } = history;

      if (String(action).toUpperCase() === 'PUSH' && prevPathname !== pathname) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }, [history, pathname, prevPathname]);

  useEffect(() => {
    if (prevPathname !== pathname && isMobileNavigationOpen) {
      closeMobileNavigation();
    }
  });

  useEffect(() => {
    if (prevPathname !== pathname) {
      const scrollOptions = {
        top: 0,
        behavior: 'instant',
      };

      window.scrollTo(scrollOptions);
    }
  });

  return (
    <main
      className={classnames(classes['main'], {
        [classes['main--is-loading']]: isLoading,
      })}
      id="main-content"
      ref={mainElement}
    >
      <div className={classes['main__content']}>
        <Spinner />
        {renderLocation(location)}
        {children}
      </div>
    </main>
  );
};

Main.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    listen: PropTypes.func.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isMobileNavigationOpen: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  renderLocation: PropTypes.func.isRequired,
  closeMobileNavigation: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;
