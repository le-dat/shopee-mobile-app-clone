import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: (horizontal: boolean) => ({
    display: "flex",
    width: horizontal ? 180 : "50%",
    paddingHorizontal: 5,
    justifyContent: "center",
  }),
  productWrapper: (border: boolean) => ({
    borderColor: border ? COLORS.gray : "transparent",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    overflow: "hidden",
    width: "100%",
    position: "relative",
  }),
  productSell: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  productImageWrapper: {
    width: "100%",
    alignItem: "flex-start",
    justifyContent: "center",
    height: 150,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productText: {
    marginBottom: 20,
  },
  productBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    color: COLORS.primary,
    fontSize: 16,
  },
  productSellNumber: {
    fontSize: 10,
    padding: 10,
  },
});
export default styles;
