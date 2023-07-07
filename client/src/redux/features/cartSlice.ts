import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItemIProps, StrapiIProps } from "../../types/data";

export interface DataIProps {
  item: StrapiIProps<ItemIProps>;
  quantity: number;
}
export interface IProps {
  items: DataIProps[] | [];
}
const initialState: IProps = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItem: (state, action: PayloadAction<number>) => {
      state.items.find((item) => item.item.id === action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.find((item) => item.item.id !== action.payload);
    },
    addItem: (state, action: PayloadAction<DataIProps>) => {
      const existingItem = state.items.find((item) => item.item.id === action.payload.item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = {
          item: action.payload.item,
          quantity: 1,
        };
        state.items = [...state.items, newItem];
      }
    },
    decreaseItem: (state, action: PayloadAction<DataIProps>) => {
      const existingItem = state.items.find((item) => item.item.id === action.payload.item.id);
      if (existingItem) {
        if (existingItem?.quantity === 1) {
          state.items = state.items.filter((item) => item.item.id !== action.payload.item.id);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addItem, removeItem, getItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
