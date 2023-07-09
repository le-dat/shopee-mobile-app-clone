import { Dialog } from "@rneui/themed";
import React from "react";
import { Text } from "react-native";

import {
  ICON_ERROR_CIRCLE,
  ICON_INFO_CIRCLE,
  ICON_SUCCESS_CIRCLE,
  ICON_WARNING_CIRCLE,
} from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { handleCloseDialog } from "../../../redux/features/dialogSlice";
import MyCustomIcon from "../icon/MyCustomIcon";
import styles from "./mycustomdialog.style";

const MyCustomDialog: React.FC = () => {
  const { isOpen, title, type } = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(handleCloseDialog());
  };

  const ICON =
    type === "success"
      ? ICON_SUCCESS_CIRCLE
      : type === "error"
      ? ICON_ERROR_CIRCLE
      : type === "warning"
      ? ICON_WARNING_CIRCLE
      : ICON_INFO_CIRCLE;

  return (
    <Dialog isVisible={isOpen} onBackdropPress={handleClose} overlayStyle={styles.wrapper}>
      <MyCustomIcon {...ICON} size={35} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </Dialog>
  );
};

export default MyCustomDialog;
