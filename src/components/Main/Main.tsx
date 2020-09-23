import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Spinner from 'components/Spinner/Spinner';
import usePrevious from 'hooks/usePrevious';
import { AppDispatch, RootState } from 'store';
import { closeTouchNavigation } from 'store/ui';
import { ClassNameProps } from 'types/common';

import { Content, MainWrapper } from './Main.constants';

const Main: FunctionComponent<ClassNameProps & PropsWithChildren<{}>> = ({
  children,
  className,
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const prevPathname = usePrevious(pathname);
  const { isLoading, isTouchNavigationOpen } = useSelector((state: RootState) => ({
    isLoading: Boolean(state.about.isFetching || state.portfolio.isFetching),
    isTouchNavigationOpen: state.ui.isTouchNavigationOpen,
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
    if (prevPathname !== pathname && isTouchNavigationOpen) {
      dispatch(closeTouchNavigation());
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
    <MainWrapper className={className} isLoading={isLoading} id="main-content">
      <Content>
        <Spinner />
        {children}
      </Content>
    </MainWrapper>
  );
};

export default Main;
