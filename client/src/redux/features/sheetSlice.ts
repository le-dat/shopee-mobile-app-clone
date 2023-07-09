/* eslint-disable @typescript-eslint/no-empty-function */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCartIProps } from "../../types/store";

export interface IProps {
  isOpen: boolean;
  product: ProductCartIProps | null;
}
const initialState: IProps = {
  isOpen: false,
  product: null,
};

export const sheetSlice = createSlice({
  name: "sheet",
  initialState,
  reducers: {
    openSheet: (state) => {
      state.isOpen = true;
    },
    closeSheet: (state) => {
      state.isOpen = false;
    },
    setProduct: (state, action: PayloadAction<ProductCartIProps>) => {
      state.product = action.payload;
    },
  },
});

export const { openSheet, closeSheet, setProduct } = sheetSlice.actions;
export default sheetSlice.reducer;
