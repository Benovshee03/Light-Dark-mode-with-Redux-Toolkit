import { createSlice } from "@reduxjs/toolkit";
import { modeActions } from './themeaction'


export const modeReducer = createSlice({
    name:'mode',
    initialState:'light-theme',
    reducers: modeActions
})

export const {toggleTheme} = modeReducer.actions
export default modeReducer.reducer