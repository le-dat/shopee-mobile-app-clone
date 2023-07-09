import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

export default styles;
