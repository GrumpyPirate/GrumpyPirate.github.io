import { ApolloProvider } from '@apollo/client';
import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import Sidebar from 'components/Sidebar/Sidebar';
import contentService from 'services/ContentService';
import { mediaQueries, rem, sidebarHeightMobile } from 'styles';
import { PropsWithClassName } from 'types/common';

import { GlobalStyles, RouteFallbackSpinner } from './App.constants';

const AboutPage = lazy(() => import('components/Pages/AboutPage/AboutPage'));
const PortfolioPage = lazy(() => import('components/Pages/PortfolioPage/PortfolioPage'));
const PortfolioItemPage = lazy(
  () => import('components/Pages/PortfolioItemPage/PortfolioItemPage'),
);
const HTTPNotFoundPage = lazy(() => import('components/Pages/HTTPNotFoundPage/HTTPNotFoundPage'));

const App: FunctionComponent<PropsWithClassName> = ({ className }) => (
  <ApolloProvider client={contentService.client}>
    <GlobalStyles />
    <Router basename="/">
      <div className={className}>
        <Sidebar />
        <Main>
          <Suspense fallback={<RouteFallbackSpinner />}>
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
              <Route exact path="/portfolio/:slug" component={PortfolioItemPage} />
              <Route exact path="/404" component={HTTPNotFoundPage} />
              <Route component={HTTPNotFoundPage} />
            </Switch>
            <Footer />
          </Suspense>
        </Main>
      </div>
    </Router>
  </ApolloProvider>
);

export default styled(App)`
  padding-top: ${rem(sidebarHeightMobile)};

  @media ${mediaQueries.lg} {
    align-items: stretch;
    display: flex;
    flex-flow: row nowrap;
    padding-top: 0;
  }
`;
