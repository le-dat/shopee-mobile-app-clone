import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    paddingHorizontal: 20,
    color: COLORS.text,
    textAlign: "center",
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
  },
});

export default styles;
