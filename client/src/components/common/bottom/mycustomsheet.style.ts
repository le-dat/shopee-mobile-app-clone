import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 60,
    bottom: 90,
    backgroundColor: COLORS.white,
  },
});

export default styles;
