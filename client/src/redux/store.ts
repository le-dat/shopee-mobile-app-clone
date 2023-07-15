import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cartSlice";
import categoryReducer from "./reducers/categorySlice";
import dialogReducer from "./reducers/dialogSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dialog: dialogReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
