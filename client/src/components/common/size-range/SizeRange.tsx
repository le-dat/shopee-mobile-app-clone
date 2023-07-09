import React from "react";
import { Text, View } from "react-native";

import { COLORS, ICON_ADD, ICON_MINUS } from "../../../constants";
import MyCustomIcon from "../icon/MyCustomIcon";
import styles from "./sizerange.style";

interface IProps {
  value: number;
  setValue: (value: number) => void;
}
const SizeRange: React.FC<IProps> = ({ value, setValue }) => {
  const handleMinus = () => {
    const newValue = value > 1 ? value - 1 : 0;
    setValue(newValue);
  };

  const handleAdd = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  return (
    <View style={styles.wrapper}>
      <MyCustomIcon
        {...ICON_MINUS}
        handlePress={handleMinus}
        style={styles.icon}
        color={COLORS.text}
        size={19}
      />
      <Text style={styles.value}>{value}</Text>
      <MyCustomIcon
        {...ICON_ADD}
        handlePress={handleAdd}
        style={styles.icon}
        color={COLORS.text}
        size={18}
      />
    </View>
  );
};

export default SizeRange;
