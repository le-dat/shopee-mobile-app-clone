import { Text, View } from "native-base";
import React from "react";

import { StyleSheet } from "react-native";
import Quantity from "../Quantity";

interface IProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const SheetQuantity: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <View style={styles.range}>
      <Text style={styles.title}>Số lượng</Text>
      <Quantity value={value} setValue={setValue} />
    </View>
  );
};

const styles = StyleSheet.create<any>({
  range: {
    paddingHorizontal: 15,
    paddingBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SheetQuantity;
