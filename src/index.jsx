// Imports
// ---------------------------------------------------------------------------------------------------------------------
// React
import React from 'react'
import ReactDOM from 'react-dom'

// Router
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

// App
import App from './components/App/App.jsx'

// Housekeeping
document.documentElement.classList.remove('no-js')

// Render App
ReactDOM.render(
    (
        <BrowserRouter basename="/">
            <App/>
        </BrowserRouter>
    ), document.getElementById('app-root')
) // /ReactDOM.render
