// React
import React from 'react'

// Router
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Sidebar from 'components/Sidebar/Sidebar'
import Footer from 'components/Footer/Footer'
import About from 'components/About/About.jsx'
import WebDev from 'components/WebDev/WebDev.jsx'
import DigitalArt from 'components/DigitalArt/DigitalArt.jsx'
import HTTPNotFound from 'components/404/404'

// SCSS
import './App.scss'

// Define App
const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar/>

        <main className="content-container">
          <Switch>
            <Route
              exact
              path="/"
              component={About}
            />

            <Route
              path="/webdev"
              component={WebDev}
            />

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
