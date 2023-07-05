import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  swiperList: {},
  swiperItem: {
    flex: 1,
    width: "100%",
    height: "100%",
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
