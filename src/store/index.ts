import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import aboutReducer from './about/about.reducer';
import portfolioReducer from './portfolio/portfolio.reducer';
import uiReducer from './ui/ui.reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  about: aboutReducer,
  portfolio: portfolioReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
