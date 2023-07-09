import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create<any>({
  detail: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    width: "100%",
  },
  title: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  price: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: "bold",
    backgroundColor: COLORS.white,
  },
  originPrice: {
    textDecorationLine: "line-through",
    color: COLORS.grayDark,
  },
  voucher: {
    fontSize: 10,
    lineHeight: 20,
    fontFamily: FONTS.bold,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingHorizontal: 3,
    paddingVertical: 1,
  },
});

export default styles;
