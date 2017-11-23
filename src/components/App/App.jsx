// React
import React from 'react'

// Router
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Vendor
import { EventEmitter } from 'fbemitter'

// Components
import Sidebar from 'components/Sidebar/Sidebar'
import MainContainer from 'components/MainContainer/MainContainer'
import Footer from 'components/Footer/Footer'
import About from 'components/About/About.jsx'
import WebDev from 'components/WebDev/WebDev.jsx'
import PortfolioPage from 'components/Portfolio/PortfolioPage/PortfolioPage.jsx'
// import DigitalArt from 'components/DigitalArt/DigitalArt.jsx'
import HTTPNotFound from 'components/404/404'

// SCSS
import './App.scss'

// Define App
const App = () => {
  const emitter = new EventEmitter()

  return (
    <Router basename="/">
      <div className="app">
        <Sidebar />

        <MainContainer emitter={emitter}>
          <Switch>
            {/* About */}
            <Route
              exact
              path="/"
              render={(props) => {
                return <About />
              }}
            />

            {/* Web Development */}
            <Route
              exact
              path="/webdev"
              render={(props) => {
                return (
                  <WebDev emitter={emitter} />
                )
              }}
            />

            <Route
              path="/webdev/:portfolioItemSlug"
              render={(props) => {
                return (
                  <PortfolioPage emitter={emitter} {...props} />
                )
              }}
            />

            {/* Digital Art */}
            {/* <Route
              path="/digital-art"
              render={(props) => {
                return <DigitalArt />
              }}
            /> */}

            {/* Fallback to 404 */}
            <Route component={HTTPNotFound}/>
          </Switch>

          <Footer />
        </MainContainer>
      </div>
    </Router>
  )
} // /const App

export default App
