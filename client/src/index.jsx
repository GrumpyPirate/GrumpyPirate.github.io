import React from 'react'
import ReactDOM from 'react-dom'

import Store from './components/Store/Store'
import App from './components/App/App'

import 'sanitize.css';
import './sass/global.scss'

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
)
