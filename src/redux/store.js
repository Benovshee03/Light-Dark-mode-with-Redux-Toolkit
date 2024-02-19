import { configureStore } from "@reduxjs/toolkit";
import themesSlice from "./themeslice"; 
export default configureStore({
    reducer: {
      themes: themesSlice, 
    }
});
