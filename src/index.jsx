// Imports
// ---------------------------------------------------------------------------------------------------------------------
// React
import React from 'react'
import ReactDOM from 'react-dom'

// Router
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

// App
import Navbar from './components/Navbar/Navbar.jsx'
import App from './components/App/App.jsx'

ReactDOM.render(
    (
        <BrowserRouter
            basename="/"
        >
            <div>
                <Navbar />
                <App who="world"/>
            </div>
        </BrowserRouter>
    ), document.getElementById('app-root')
) // /ReactDOM.render
