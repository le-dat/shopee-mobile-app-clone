import React from "react";
import { Text, View } from "react-native";

import styles from "./sell.style";

const Sell: React.FC = () => {
  return (
    <View style={styles.productSell}>
      <Text style={styles.productSellText}>40%</Text>
      <Text style={[styles.productSellText, { color: "#fff", textTransform: "uppercase" }]}>
        Giảm
      </Text>

      <View style={styles.productSellBottom} />
    </View>
  );
};

export default Sell;
