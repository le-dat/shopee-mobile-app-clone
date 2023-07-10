import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 10,
  },
});

export default styles;
