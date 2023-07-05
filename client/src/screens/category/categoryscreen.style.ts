import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  wrapper: {},
  category: {
    backgroundColor: COLORS.primary,
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  categoryImageWrapper: {
    width: 50,
    height: 50,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  categoryInfo: {},
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
});

export default styles;
