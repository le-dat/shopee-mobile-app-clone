import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cartSlice";
import queryReducer from "./reducers/querySlice";
import dialogReducer from "./reducers/dialogSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dialog: dialogReducer,
    query: queryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
