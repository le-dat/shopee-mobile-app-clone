import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    display: "flex",
    width: "50%",
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  productItem: (border: boolean) => ({
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
  productItemImageWrapper: {
    width: "100%",
    alignItem: "flex-start",
    justifyContent: "center",
    height: 150,
  },
  productItemImage: {
    width: "100%",
    aspectRadio: 1,
  },
  productItemText: {
    marginBottom: 20,
  },
  productItemBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productItemPrice: {
    color: COLORS.primary,
    fontSize: 16,
  },
  productItemSellNumber: {
    fontSize: 12,
    padding: 10,
  },
});
export default styles;
