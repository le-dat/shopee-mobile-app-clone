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
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  categoryList: {
    padding: 10,
    flexDirection: "row",
  },
  categoryItem: (active: boolean) => ({
    borderWidth: 1,
    width: 80,
    height: 80,
    borderColor: active ? COLORS.primary : "transparent",
  }),
  categoryItemImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default styles;
