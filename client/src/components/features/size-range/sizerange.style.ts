import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    width: 45,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    color: COLORS.primary,
  },
  icon: {
    padding: 0,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  disable: (disable: boolean) => ({
    opacity: disable ? 0.3 : 1,
  }),
});

export default styles;
