import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { COLORS } from "../../constants";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const HeadingWrapper: React.FC<IProps> = ({ style, children }) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: COLORS.white,
  },
});

export default HeadingWrapper;
