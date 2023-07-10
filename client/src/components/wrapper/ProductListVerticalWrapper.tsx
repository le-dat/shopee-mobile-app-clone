import { View } from "native-base";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ProductListVerticalWrapper: React.FC<IProps> = ({ children, style }) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
});

export default ProductListVerticalWrapper;
