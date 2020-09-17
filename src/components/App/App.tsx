import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import About from 'components/Pages/AboutPage/AboutPage';
import HTTPNotFoundPage from 'components/Pages/HTTPNotFoundPage/HTTPNotFoundPage';
import PortfolioItemPage from 'components/Pages/PortfolioItemPage/PortfolioItemPage';
import PortfolioPage from 'components/Pages/PortfolioPage/PortfolioPage';
import Sidebar from 'components/Sidebar/Sidebar';
import store from 'store';

import classes from './App.scss';

const App: FunctionComponent = () => (
  <Provider store={store}>
    <Router basename="/">
      <div className={classes['app']}>
        <Sidebar />
        <Main>
          <Switch>
            <Route exact path="/" component={About} />
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
);

export default App;
