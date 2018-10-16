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

import classes from './App.scss';

const App = () => (
  <Router basename="/">
    <div className={classes['app']}>
      <Sidebar />
      <Main
        renderLocation={(location) => {
          const { pathname } = location;

          return (
            <TransitionGroup component={null}>
              <CSSTransition
                key={pathname}
                classNames={{
                  enter: classes['app__page-transition--enter'],
                  enterActive: classes['app__page-transition--enter--active'],
                  exit: classes['app__page-transition--exit'],
                  exitActive: classes['app__page-transition--exit--active'],
                  exitDone: classes['app__page-transition--exit--done'],
                }}
                timeout={{ exit: 5000, enter: 5000 }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={About} />
                      {/* <Route exact path="/webdev" component={WebDev} /> */}
                      {/* <Route exact path="/webdev/:slug" component={PortfolioPage} /> */}
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
