import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, ICON_ADD, ICON_MINUS } from "../../constants";
import MyCustomButton from "./buttons/MyCustomButton";

interface IProps {
  value: number;
  setValue: (value: number) => void;
}
const Quantity: React.FC<IProps> = ({ value, setValue }) => {
  const handleMinus = () => {
    const newValue = value > 1 ? value - 1 : 1;
    setValue(newValue);
  };

  const handleAdd = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  return (
    <View style={styles.wrapper}>
      <MyCustomButton
        {...ICON_MINUS}
        handlePress={handleMinus}
        style={[styles.icon, styles.disable(value === 1)]}
        color={COLORS.text}
        size={19}
      />
      <Text style={styles.value}>{value}</Text>
      <MyCustomButton
        {...ICON_ADD}
        handlePress={handleAdd}
        style={styles.icon}
        color={COLORS.text}
        size={18}
      />
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    width: 45,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    color: COLORS.primary,
  },
  icon: {
    padding: 0,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  disable: (disable: boolean) => ({
    opacity: disable ? 0.3 : 1,
  }),
});

export default Quantity;
