import { Text, View } from "native-base";
import React from "react";
import SizeRange from "../../size-range/SizeRange";
import styles from "./sheetquantitty.style";

interface IProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const SheetQuantity: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <View style={styles.range}>
      <Text style={styles.title}>Số lượng</Text>
      <SizeRange value={value} setValue={setValue} />
    </View>
  );
};

export default SheetQuantity;
