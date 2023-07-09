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
  productList: {
    padding: 10,
    marginBottom: 100,
    backgroundColor: COLORS.white,
  },
});

export default styles;
