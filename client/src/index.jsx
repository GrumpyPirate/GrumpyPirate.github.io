import '@babel/polyfill';

import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom';

import Store from 'components/Store/Store.component';
import App from 'components/App/App.component';

import 'sanitize.css';
import './sass/global.scss';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
