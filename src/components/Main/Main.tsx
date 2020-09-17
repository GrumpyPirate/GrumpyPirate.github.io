import classnames from 'classnames';
import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Spinner from 'components/Spinner/Spinner';
import usePrevious from 'hooks/usePrevious';
import { AppDispatch, RootState } from 'store';
import { closeMobileNavigation } from 'store/ui/ui.actions';

import classes from './Main.scss';

const Main: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const prevPathname = usePrevious(pathname);
  const { isLoading, isMobileNavigationOpen } = useSelector((state: RootState) => ({
    isLoading: Boolean(state.about.isFetching || state.portfolio.isFetching),
    isMobileNavigationOpen: state.ui.isMobileNavigationOpen,
  }));
  const dispatch: AppDispatch = useDispatch();

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
      dispatch(closeMobileNavigation());
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
        {children}
      </div>
    </main>
  );
};

export default Main;
