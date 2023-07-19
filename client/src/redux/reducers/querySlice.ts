import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IProps {
  name: string;
  createdAt?: string;
  sell_number?: string;
  price?: string;
}
const initialState: IProps = {
  name: "",
  createdAt: "",
  sell_number: "",
  price: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQueries: (state, action: PayloadAction<IProps>) => {
      state.name = action.payload.name;
      state.createdAt = action.payload.createdAt;
      state.sell_number = action.payload.sell_number;
      state.price = action.payload.price;
    },
    resetQueries: (state) => {
      state.name = "";
      state.createdAt = "";
      state.sell_number = "";
      state.price = "";
    },
  },
});

export const { setQueries, resetQueries } = querySlice.actions;
export default querySlice.reducer;
