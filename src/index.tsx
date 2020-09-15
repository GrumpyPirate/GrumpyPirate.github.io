/* eslint-disable no-use-before-define */
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App/App.component';
import Store from 'components/Store/Store.component';

import './polyfills';
import './sass/global.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'sanitize.css';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root'),
);
