import { Dialog } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  COLORS,
  ICON_ERROR_CIRCLE,
  ICON_INFO_CIRCLE,
  ICON_SUCCESS_CIRCLE,
  ICON_WARNING_CIRCLE,
} from "../../constants";
import MyCustomButton from "./buttons/MyCustomButton";
import { closeDialog } from "../../redux/reducers/dialogSlice";

const MyCustomDialog: React.FC = () => {
  const { isOpen, title, type } = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const ICON =
    type === "SUCCESS"
      ? ICON_SUCCESS_CIRCLE
      : type === "ERROR"
      ? ICON_ERROR_CIRCLE
      : type === "WARNING"
      ? ICON_WARNING_CIRCLE
      : ICON_INFO_CIRCLE;

  return (
    <Dialog isVisible={isOpen} onBackdropPress={handleClose} overlayStyle={styles.wrapper}>
      <MyCustomButton {...ICON} size={35} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </Dialog>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    backgroundColor: COLORS.text,
    paddingVertical: 20,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    backgroundColor: COLORS.text,
  },
  text: {
    color: COLORS.white,
  },
});

export default MyCustomDialog;
