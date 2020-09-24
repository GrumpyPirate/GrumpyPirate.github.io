import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import usePrevious from 'hooks/usePrevious';
import { ClassNameProps } from 'types/common';

import { Content, MainWrapper } from './Main.constants';

const Main: FunctionComponent<ClassNameProps & PropsWithChildren<{}>> = ({
  children,
  className,
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
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
    if (prevPathname !== pathname) {
      const scrollOptions: ScrollToOptions = {
        top: 0,
        behavior: 'auto',
      };

      window.scrollTo(scrollOptions);
    }
  });

  return (
    <MainWrapper className={className} id="main-content">
      <Content>{children}</Content>
    </MainWrapper>
  );
};

export default Main;
