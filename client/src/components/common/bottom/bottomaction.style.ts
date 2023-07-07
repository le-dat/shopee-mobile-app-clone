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
    bottom: 90,
    backgroundColor: COLORS.white,
  },
  divide: {
    borderRightWidth: 1,
    borderRightColor: COLORS.gray,
  },
  button: {
    height: "100%",
    paddingVertical: 16,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCart: {
    color: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: 10,
  },
  buttonPayment: {
    flex: 1,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
