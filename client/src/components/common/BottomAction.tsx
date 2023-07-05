import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, ICON_CART } from "../../constants";
import MyCustomIcon from "./MyCustomIcon";

interface IProps {
  id: number;
}
const BottomAction: React.FC<IProps> = ({ id }) => {
  const handleAddCart = () => {
    console.log("add id: " + id);
  };

  const handlePayment = () => {
    console.log("payment id: " + id);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.button, styles.buttonCart]}>
        <MyCustomIcon {...ICON_CART} handlePress={() => handleAddCart()} color={COLORS.primary} />
        <Text>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonPayment]}
        onPress={() => handlePayment()}
      >
        <Text style={{ color: COLORS.white }}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCart: {
    color: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  buttonPayment: {
    flex: 1,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
});
export default BottomAction;
