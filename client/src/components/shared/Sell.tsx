import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../constants";
import { getPercentReduce } from "../../utils/common";

interface IProps {
  price: number;
  originalPrice: number;
}
const Sell: React.FC<IProps> = ({ price, originalPrice }) => {
  if (originalPrice === 0 || price === originalPrice) return null;

  return (
    <View style={styles.productSell}>
      <Text style={styles.productSellText}>{getPercentReduce(price, originalPrice)}%</Text>
      <Text style={[styles.productSellText, { color: "#fff", textTransform: "uppercase" }]}>
        Giảm
      </Text>

      <View style={styles.productSellBottom} />
    </View>
  );
};

const styles = StyleSheet.create<any>({
  productSell: {
    width: 50,
    alignItems: "center",
  },
  productSellText: {
    width: "100%",
    color: COLORS.primary,
    backgroundColor: COLORS.yellow,
    textAlign: "center",
  },
  productSellBottom: {
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 5,
    borderColor: COLORS.yellow,
    borderBottomColor: "transparent",
  },
});

export default Sell;
