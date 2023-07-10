import { View } from "native-base";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "../../constants";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const BottomWrapper: React.FC<IProps> = ({ children, style }) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 60,
    bottom: 0,
    backgroundColor: COLORS.green,
  },
});

export default BottomWrapper;