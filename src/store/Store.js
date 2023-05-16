import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./reducers/cotegorySlice";
import mealReducer from "./reducers/mealSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    meal: mealReducer,
    cart: cartReducer,
  },
});
  