import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 60,
    bottom: 0,
    backgroundColor: COLORS.green,
  },
  divide: {
    width: 1,
    height: "60%",
    backgroundColor: COLORS.text,
  },
  button: {
    height: "100%",
    paddingVertical: 16,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCart: {
    color: COLORS.white,
    backgroundColor: COLORS.green,
  },
  text: {
    fontSize: 10,
    color: COLORS.white,
  },
  buttonPayment: {
    flex: 1,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
