import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 3,
    padding: 5,
  },
  column: {
    flexDirection: "column",
    gap: 10,
  },
  categoryItem: {
    width: 80,
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    height: 100,
  },
  categoryItemImage: {
    height: 40,
  },
  categoryItemText: {
    textAlign: "center",
  },
});

export default styles;
