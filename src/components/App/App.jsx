// React
import React from 'react'

// Router
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

// Components
import Sidebar from '../Sidebar/Sidebar.jsx'
import ContentContainer from '../ContentContainer/ContentContainer.jsx'
import About from '../About/About.jsx'
import WebDev from '../WebDev/WebDev.jsx'
import DigitalArt from '../DigitalArt/DigitalArt.jsx'

// SCSS
import './App.scss'

const ROUTES = [
    // Route - index (use About)
    {
        path: '/',
        exact: true,
        name: 'About',
        components: {
            content: About
        }
    },
    // Route - Web Development
    {
        path: '/webdev',
        name: 'Web Development',
        components: {
            content: WebDev
        }
    },
    // Route - Digital Art
    {
        path: '/digital-art',
        name: 'Digital Art',
        components: {
            content: DigitalArt
        }
    }
] // /const ROUTES

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
                    <Sidebar routes={ROUTES} />
                    <ContentContainer routes={ROUTES} />
                </div>
            </Router>
        )
    } // /render()
} // /class App extends React.Component

export default App
