import { ApolloProvider } from '@apollo/client';
import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
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

const App: FunctionComponent<PropsWithClassName> = function ({ className }) {
  return (
    <ApolloProvider client={contentService.client}>
      <GlobalStyles />
      <Router basename="/">
        <div className={className}>
          <Sidebar />
          <Main>
            <Suspense fallback={<RouteFallbackSpinner />}>
              <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio/:slug" element={<PortfolioItemPage />} />
                <Route path="/404" element={<HTTPNotFoundPage />} />
                <Route element={<HTTPNotFoundPage />} />
              </Routes>
              <Footer />
            </Suspense>
          </Main>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default styled(App)`
  padding-top: ${rem(sidebarHeightMobile)};

  @media ${mediaQueries.lg} {
    align-items: stretch;
    display: flex;
    flex-flow: row nowrap;
    padding-top: 0;
  }
`;
