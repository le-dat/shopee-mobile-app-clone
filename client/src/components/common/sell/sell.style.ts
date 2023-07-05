import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
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

export default styles;
