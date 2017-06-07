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
import Sidebar from '../Sidebar/Sidebar'
import HTTPNotFound from '../404/404'

// SCSS
import './App.scss'

// Define App
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    } // /constructor(props)

    render() {
        return (
            <Router>
                <div className="app">
                    <Sidebar />

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
                    </main>
                </div>
            </Router>
        )
    } // /render()
} // /class App extends React.Component

export default App
