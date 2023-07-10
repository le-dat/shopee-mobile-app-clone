import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ProductCartIProps, UUID_IProps } from "../../types/store";

export interface IProps {
  products: ProductCartIProps[] | [];
}
const initialState: IProps = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<UUID_IProps>) => {
      state.products.find((p) => p.uuid === action.payload.uuid);
    },

    removeProduct: (state, action: PayloadAction<UUID_IProps>) => {
      state.products = state.products.filter((p) => p.uuid !== action.payload.uuid);
    },

    addProduct: (state, action: PayloadAction<ProductCartIProps>) => {
      state.products = [...state.products, action.payload];
    },

    updateProduct: (state, action: PayloadAction<ProductCartIProps>) => {
      const newProducts = state.products.map((p) =>
        p.uuid === action.payload.uuid ? action.payload : p
      );
      state.products = newProducts;
    },
  },
});

export const { addProduct, removeProduct, updateProduct, getProduct } = cartSlice.actions;
export default cartSlice.reducer;
