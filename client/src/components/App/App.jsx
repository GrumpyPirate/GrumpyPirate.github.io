import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import About from 'components/About/About';
import WebDev from 'containers/WebDev/WebDev';
import PortfolioPage from 'containers/PortfolioPage/PortfolioPage';
import HTTPNotFound from 'components/404/404';

import './App.scss';

const App = () => (
  <Router basename="/">
    <div className="app">
      <Sidebar />
      <Main>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/webdev" component={WebDev} />
          <Route exact path="/webdev/:slug" component={PortfolioPage} />
          <Route exact path="/404" component={HTTPNotFound} />
          <Route component={HTTPNotFound} />
        </Switch>
        <Footer />
      </Main>
    </div>
  </Router>
);

export default App;
