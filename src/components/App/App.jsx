// React
import React from 'react'

// Router
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Routes from '../../config/routes'

// Components
import Sidebar from '../Sidebar/Sidebar.jsx'

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
                        {Routes.map((route, index) =>
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.components.content}
                            />
                        )}
                    </main>
                </div>
            </Router>
        )
    } // /render()
} // /class App extends React.Component

export default App
