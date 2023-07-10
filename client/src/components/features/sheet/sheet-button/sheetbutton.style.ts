import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const styles = StyleSheet.create<any>({
  buttonWrapper: {
    paddingHorizontal: 15,
  },
  button: (disabled: boolean) => ({
    backgroundColor: disabled ? COLORS.gray : COLORS.primary,
  }),
  buttonText: (disabled: boolean) => ({
    color: disabled ? COLORS.text : COLORS.white,
    fontSize: 14,
  }),
});

export default styles;
