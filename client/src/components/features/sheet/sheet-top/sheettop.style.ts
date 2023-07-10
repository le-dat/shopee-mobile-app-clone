import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../../constants";

const styles = StyleSheet.create<any>({
  top: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 15,
  },
  topLeft: {
    width: 150,
    height: 150,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  topImage: {
    aspectRatio: 1,
    width: "100%",
    height: "100%",
  },
  topCenter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  price: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  topRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  iconClose: {},
});

export default styles;
