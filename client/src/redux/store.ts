import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import dialogSlice from "./reducers/dialogSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dialog: dialogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
