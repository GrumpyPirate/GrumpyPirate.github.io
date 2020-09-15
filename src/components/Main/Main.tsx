import React, { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PropsWithClassName } from 'types/common';

import { Content, MainWrapper } from './Main.constants';

const Main: FunctionComponent<PropsWithClassName> = function ({ children, className }) {
  const { pathname } = useLocation();

  /**
   * Use a side-effect to:
   *  - Scroll the window back up to the top of the page, when the location changes
   */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <MainWrapper className={className} id="main-content">
      <Content>{children}</Content>
    </MainWrapper>
  );
};

export default Main;
