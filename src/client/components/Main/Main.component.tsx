import React, { useEffect, FunctionComponent } from 'react';
import classnames from 'classnames';

import usePrevious from 'hooks/usePrevious';

import Spinner from 'components/Spinner/Spinner.container';

import { MainProps } from './Main.component.d';
import classes from './Main.component.scss';

const Main: FunctionComponent<MainProps> = ({
  history,
  isLoading,
  isMobileNavigationOpen,
  location,
  renderLocation,
  closeMobileNavigation,
  children,
}: MainProps) => {
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
      const scrollOptions: ScrollToOptions = {
        top: 0,
        behavior: 'auto',
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
    >
      <div className={classes['main__content']}>
        <Spinner />
        {renderLocation(location)}
        {children}
      </div>
    </main>
  );
};

export default Main;
