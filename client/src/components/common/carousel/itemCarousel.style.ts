import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    backgroundColor: COLORS.white,
  },
  imageWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
  },
  categoryList: {
    flexDirection: "row",
  },
  categoryItem: (active: boolean) => ({
    borderWidth: 1,
    width: 80,
    height: 80,
    borderColor: active ? COLORS.primary : "transparent",
  }),
  categoryItemImage: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});

export default styles;
