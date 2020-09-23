import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  isTouchNavigationOpen: boolean;
}

export const initialState: UIState = {
  isTouchNavigationOpen: false,
};

const stateSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    closeTouchNavigation: (state) => ({
      ...state,
      isTouchNavigationOpen: false,
    }),
    openTouchNavigation: (state) => ({
      ...state,
      isTouchNavigationOpen: true,
    }),
    toggleTouchNavigation: (state) => ({
      ...state,
      isTouchNavigationOpen: !state.isTouchNavigationOpen,
    }),
  },
});

export const {
  closeTouchNavigation,
  openTouchNavigation,
  toggleTouchNavigation,
} = stateSlice.actions;

export default stateSlice.reducer;
