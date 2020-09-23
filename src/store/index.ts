import { combineReducers, configureStore } from '@reduxjs/toolkit';

import aboutReducer, { initialState as initialAboutState } from './about';
import portfolioReducer, { initialState as initialPortfolioState } from './portfolio';
import uiReducer, { initialState as initialUiState } from './ui';

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

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialRootState,
});

export type AppDispatch = typeof store.dispatch;

export default store;
