import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { ProductIProps } from "../../types/product";

interface AttributeIProp extends ProductIProps {
  quantity: number;
}
export interface IProps {
  products: AttributeIProp[] | [];
}
const initialState: IProps = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getProduct: (state: IProps, action: PayloadAction<string>) => {
      state.products.find((p) => p.id === action.payload);
    },
    removeProduct: (state: IProps, action: PayloadAction<string>) => {
      state.products.filter((p: { id: string }) => p.id !== action.payload);
    },
    addProduct: (state: IProps, action: PayloadAction<AttributeIProp>) => {
      const newProducts = state.products.map((p) =>
        p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      state.products = newProducts;
    },
    updateProduct: (state: IProps, action: PayloadAction<AttributeIProp>) => {
      const newProducts = state.products.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
      state.products = newProducts;
    },
  },
});

export const { addProduct, removeProduct, updateProduct, getProduct } = cartSlice.actions;
export default cartSlice.reducer;
