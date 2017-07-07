// React
import React from 'react'

// Router
import {
  HashRouter as Router,
  // HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Sidebar from 'components/Sidebar/Sidebar'
import Footer from 'components/Footer/Footer'
import About from 'components/About/About.jsx'
import WebDev from 'components/WebDev/WebDev.jsx'
import PortfolioPage from 'components/PortfolioPage/PortfolioPage.jsx'
import DigitalArt from 'components/DigitalArt/DigitalArt.jsx'
import HTTPNotFound from 'components/404/404'

// SCSS
// import 'node-normalize-scss/_normalize.scss'
import './App.scss'

// Define App
const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar/>

        <main className="content-container">
          <Switch>
            {/* About */}
            <Route
              exact
              path="/"
              component={About}
            />

            {/* Web Development */}
            <Route
              exact
              path="/webdev"
              component={WebDev}
            />

            <Route
              path="/webdev/:portfolioItemId"
              component={PortfolioPage}
            />

            {/* Digital Art */}
            <Route
              path="/digital-art"
              component={DigitalArt}
            />

            {/* Fallback to 404 */}
            <Route component={HTTPNotFound}/>
          </Switch>

          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App
