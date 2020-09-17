import React from 'react';
import { render } from 'react-dom';

import App from 'components/App/App';

import './polyfills';
import 'sanitize.css';
import 'sass/global.scss';

render(<App />, document.getElementById('root'));
