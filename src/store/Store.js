import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./reducers/cotegorySlice";

export const store = configureStore({
  reducer: {
    categoryReducer
  },
});
