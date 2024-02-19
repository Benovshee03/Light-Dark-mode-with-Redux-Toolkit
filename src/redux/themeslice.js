import { createSlice } from '@reduxjs/toolkit';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    darkMode: false, 
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themesSlice.actions;

export const selectDarkMode = (state) => state.themes.darkMode;

export default themesSlice.reducer;
