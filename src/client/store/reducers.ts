import { combineReducers } from 'redux';

import { RootState } from 'store';

import uiReducer from './ui/ui.reducer';
import aboutReducer from './about/about.reducer';
import portfolioReducer from './portfolio/portfolio.reducer';

const rootReducer = combineReducers<RootState>({
  ui: uiReducer,
  about: aboutReducer,
  portfolio: portfolioReducer,
});

export default rootReducer;
