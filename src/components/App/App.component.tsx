import { LocationState } from 'history';
import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import HTTPNotFound from 'components/404/404.component';
import About from 'components/About/About.container';
import Footer from 'components/Footer/Footer.component';
import Main from 'components/Main/Main.container';
import Portfolio from 'components/Portfolio/Portfolio.container';
import PortfolioPage from 'components/PortfolioPage/PortfolioPage.container';
import Sidebar from 'components/Sidebar/Sidebar.container';
import animation from 'config/animation';

import classes from './App.component.scss';

const App: FunctionComponent = () => (
  <Router basename="/">
    <div className={classes['app']}>
      <Sidebar />
      <Main
        renderLocation={(location: LocationState) => {
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
