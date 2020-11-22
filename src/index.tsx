import './polyfills';

import React from 'react';
import { render } from 'react-dom';

import App from 'components/App/App';

import 'sanitize.css';

render(<App />, document.getElementById('root'));
