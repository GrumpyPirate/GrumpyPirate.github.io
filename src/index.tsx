import React from 'react';
import { render } from 'react-dom';

import App from 'components/App/App';

import './polyfills';
import 'sanitize.css';

render(<App />, document.getElementById('root'));
