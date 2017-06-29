// React
import React from 'react'

// Router
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Routes from '../../config/routes'

// Components
import Sidebar from 'components/Sidebar/Sidebar'
import Footer from 'components/Footer/Footer'
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
            {Routes.map((route, index) =>
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            )}
            <Route component={HTTPNotFound}/>
          </Switch>

          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App
