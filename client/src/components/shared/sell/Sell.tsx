import React from "react";
import { Text, View } from "react-native";

import styles from "./sell.style";
import { getPercentReduce } from "../../../utils/common";

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

export default Sell;
