/* eslint-disable @typescript-eslint/no-empty-function */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DialogIProps } from "../../types/common";

export interface IProps extends DialogIProps {
  isOpen: boolean;
}
const initialState: IProps = {
  isOpen: false,
  title: "Đã thêm vào giỏ",
  type: "SUCCESS",
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<DialogIProps>) => {
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.isOpen = true;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
