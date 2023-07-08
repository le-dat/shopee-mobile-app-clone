import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
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
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  categoryItemText: {
    textAlign: "center",
  },
});

export default styles;
