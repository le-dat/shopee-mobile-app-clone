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
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    paddingHorizontal: 20,
    color: COLORS.text,
    textAlign: "center",
  },
});

export default styles;
