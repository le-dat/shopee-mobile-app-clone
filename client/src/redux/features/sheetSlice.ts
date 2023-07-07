/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";

export interface IProps {
  isOpen: boolean;
}
const initialState: IProps = {
  isOpen: false,
};

export const sheetSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleOpenSheet: (state) => {
      state.isOpen = true;
    },
    handleCloseSheet: (state) => {
      state.isOpen = false;
    },
  },
});

export const { handleOpenSheet, handleCloseSheet } = sheetSlice.actions;
export default sheetSlice.reducer;
