// Imports
// ---------------------------------------------------------------------------------------------------------------------
// React
import React from 'react'
import ReactDOM from 'react-dom'

// App
import App from './components/App/App.jsx'

// Housekeeping
document.documentElement.classList.remove('no-js')

// Render App
ReactDOM.render(
    (<App />), document.getElementById('app-root')
) // /ReactDOM.render
