import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    backgroundColor: COLORS.text,
    paddingVertical: 20,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    backgroundColor: COLORS.text,
  },
  text: {
    color: COLORS.white,
  },
});

export default styles;
