import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import Sidebar from 'containers/Sidebar/Sidebar';
import Main from 'containers/Main/Main';
import WebDev from 'containers/WebDev/WebDev';
import PortfolioPage from 'containers/PortfolioPage/PortfolioPage';

import Footer from 'components/Footer/Footer';
import About from 'components/About/About';
import HTTPNotFound from 'components/404/404';

import './App.scss';

const App = () => (
  <Router basename="/">
    <div className="app">
      <Sidebar />
      <Main
        renderLocation={(location) => {
          const { pathname } = location;

          return (
            <TransitionGroup component={null}>
              <CSSTransition
                key={pathname}
                classNames="app__page-transition"
                timeout={{ exit: 300, enter: 300 }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={About} />
                      <Route exact path="/webdev" component={WebDev} />
                      <Route exact path="/webdev/:slug" component={PortfolioPage} />
                      <Route exact path="/404" component={HTTPNotFound} />
                      <Route component={HTTPNotFound} />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      >
        <Footer />
      </Main>
    </div>
  </Router>
);

export default App;
