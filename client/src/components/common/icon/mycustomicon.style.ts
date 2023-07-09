import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  icon: (rounded: boolean) => ({
    padding: 10,
    borderRadius: rounded ? 50 : 0,
  }),
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingHorizontal: 6,
    borderRadius: 50,
    backgroundColor: COLORS.yellow,
  },
  text: {
    color: COLORS.text,
  },
});

export default styles;
