import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  title: {
    flex: 1,
  },
  subTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {},
});

export default styles;
