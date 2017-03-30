// React
import React from 'react'

// Router
import {
    BrowserRouter as Router
} from 'react-router-dom'
import Routes from '../../config/routes'

// Components
import Sidebar from '../Sidebar/Sidebar.jsx'
import ContentContainer from '../ContentContainer/ContentContainer.jsx'

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
                    <ContentContainer />
                </div>
            </Router>
        )
    } // /render()
} // /class App extends React.Component

export default App
