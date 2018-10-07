import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from 'components/Sidebar/Sidebar'
import Main from 'features/layout/Main/containers/Main'
import Footer from 'components/Footer/Footer'
import About from 'components/About/About'
import WebDev from 'features/pages/WebDev/containers/WebDev'
// import PortfolioPage from 'components/Portfolio/PortfolioPage/PortfolioPage'
// import HTTPNotFound from 'components/404/404'

import './App.scss'

const App = () => (
  <Router basename="/">
    <div className="app">
      <Sidebar />
      <Main>
        <Switch>
          <Fragment>
            <Route exact path="/" component={About} />
            <Route exact path="/webdev" component={WebDev} />
            {/* <Route path="/webdev/:portfolioItemSlug" component={PortfolioPage} /> */}
            {/* <Route component={HTTPNotFound} /> */}
          </Fragment>
        </Switch>
        <Footer />
      </Main>
    </div>
  </Router>
)

export default App
