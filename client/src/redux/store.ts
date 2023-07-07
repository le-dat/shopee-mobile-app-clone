import { configureStore } from "@reduxjs/toolkit";
import sheetReducer from "./features/sheetSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    sheet: sheetReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
