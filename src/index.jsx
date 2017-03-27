// Imports
// ---------------------------------------------------------------------------------------------------------------------
// React
import React from 'react'
import ReactDOM from 'react-dom'

// Router
import { BrowserRouter, Route, Link } from 'react-router-dom'

// App
import App from './components/App/App.jsx'

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), document.getElementById('app-root')
)
