import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';

import aboutReducer, { initialState as initialAboutState } from './about/about.reducer';
import portfolioReducer, {
  initialState as initialPortfolioState,
} from './portfolio/portfolio.reducer';
import uiReducer, { initialState as initialUiState } from './ui/ui.reducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  about: aboutReducer,
  portfolio: portfolioReducer,
});

export const initialRootState: RootState = {
  ui: initialUiState,
  about: initialAboutState,
  portfolio: initialPortfolioState,
};

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = ThunkDispatch<RootState, {}, AnyAction>;

export default store;
