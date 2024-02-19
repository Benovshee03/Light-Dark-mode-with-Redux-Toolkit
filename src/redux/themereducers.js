import { configureStore } from "@reduxjs/toolkit";
import { modeReducers } from "./themeslice";

export default configureStore({
    reducer: {
      ui: uiReducers,
    }
  })