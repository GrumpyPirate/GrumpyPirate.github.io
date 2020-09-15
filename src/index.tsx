import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App/App.component';
import Store from 'components/Store/Store.component';

import 'sanitize.css';
import 'sass/global.scss';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root'),
);
