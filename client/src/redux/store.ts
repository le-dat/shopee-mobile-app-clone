import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import dialogReducer from "./features/dialogSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dialog: dialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
