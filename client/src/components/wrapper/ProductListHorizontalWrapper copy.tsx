import { ScrollView } from "native-base";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import { COLORS } from "../../constants";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ProductListHorizontalWrapper: React.FC<IProps> = ({ children, style }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.wrapper, style]}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    padding: 10,
    marginBottom: 100,
    backgroundColor: COLORS.white,
  },
});

export default ProductListHorizontalWrapper;
