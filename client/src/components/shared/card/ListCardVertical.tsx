import { View } from "native-base";
import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ProductIProps } from "../../../types/product";
import Card from "./Card";

interface IProps {
  products: ProductIProps[];
  style?: StyleProp<ViewStyle>;
}

const ListCardVertical: React.FC<IProps> = ({ products, style }) => {
  return (
    <View style={[styles.wrapper, style]}>
      {products?.map((product, index) => (
        <Card key={`product-${index}`} product={product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
});

export default ListCardVertical;
