import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  imageWrapper: {
    width: 100,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  title: {},
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: COLORS.gray,
  },
  price: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
});
export default styles;
