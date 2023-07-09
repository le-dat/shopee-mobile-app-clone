import { StyleSheet } from "react-native";

const styles = StyleSheet.create<any>({
  swiperList: {},
  swiperItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
});

export default styles;
