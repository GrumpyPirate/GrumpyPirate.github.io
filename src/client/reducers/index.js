import { combineReducers } from 'redux';

import ui from './ui/ui';
import about from './about/about';
import portfolio from './portfolio/portfolio';

const rootReducer = combineReducers({
  ui,
  about,
  portfolio,
});

export default rootReducer;
