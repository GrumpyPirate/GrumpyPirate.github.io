import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import AboutPage from 'components/Pages/AboutPage/AboutPage';
import HTTPNotFoundPage from 'components/Pages/HTTPNotFoundPage/HTTPNotFoundPage';
import PortfolioItemPage from 'components/Pages/PortfolioItemPage/PortfolioItemPage';
import PortfolioPage from 'components/Pages/PortfolioPage/PortfolioPage';
import Sidebar from 'components/Sidebar/Sidebar';
import store from 'store';
import { mediaQueries } from 'styles';
import { ClassNameProps } from 'types/common';

import GlobalStyles from './App.constants';

const App: FunctionComponent<ClassNameProps> = ({ className }) => (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <Router basename="/">
        <div className={className}>
          <Sidebar />
          <Main>
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
              <Route exact path="/portfolio/:slug" component={PortfolioItemPage} />
              <Route exact path="/404" component={HTTPNotFoundPage} />
              <Route component={HTTPNotFoundPage} />
            </Switch>
            <Footer />
          </Main>
        </div>
      </Router>
    </Provider>
  </>
);

export default styled(App)`
  padding-top: $sidebar-height-mobile;

  @media ${mediaQueries.lg} {
    align-items: stretch;
    display: flex;
    flex-flow: row nowrap;
    padding-top: 0;
  }
`;
