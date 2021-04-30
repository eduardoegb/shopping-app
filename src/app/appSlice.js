import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'home',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    navigateTo: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

// Selectors
export const selectActiveTab = ({ app }) => app.activeTab;

// Actions
export const { navigateTo } = appSlice.actions;

export default appSlice.reducer;
