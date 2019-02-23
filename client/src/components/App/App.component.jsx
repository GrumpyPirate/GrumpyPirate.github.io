import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import animation from 'config/animation';

import Sidebar from 'components/Sidebar/Sidebar.container';
import Main from 'components/Main/Main.container';
import Portfolio from 'components/Portfolio/Portfolio.container';
import PortfolioPage from 'components/PortfolioPage/PortfolioPage.container';
import About from 'components/About/About.container';

import Footer from 'components/Footer/Footer.component';
import HTTPNotFound from 'components/404/404.component';

import classes from './App.component.scss';

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
                timeout={{ exit: animation.duration * 2, enter: animation.duration * 2 }}
                mountOnEnter
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={About} />
                      <Route exact path="/portfolio" component={Portfolio} />
                      <Route exact path="/portfolio/:slug" component={PortfolioPage} />
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
