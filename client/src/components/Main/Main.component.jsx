import React, { createRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import usePrevious from 'hooks/usePrevious';

import Spinner from 'components/Spinner/Spinner.container';

import classes from './Main.component.scss';

const Main = ({
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
    if (prevPathname !== pathname && isMobileNavigationOpen) {
      closeMobileNavigation();
    }
  }, [location]);

  useEffect(() => {
    if (prevPathname !== pathname) {
      const scrollOptions = {
        top: 0,
        behavior: 'instant',
      };

      window.scrollTo(scrollOptions);
      mainElement.current.scrollTo(scrollOptions);
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
      <Spinner />
      {renderLocation(location)}
      {children}
    </main>
  );
};

Main.propTypes = {
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
