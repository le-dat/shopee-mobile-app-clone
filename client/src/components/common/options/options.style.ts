import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    color: COLORS.text,
  },
  listOption: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  option: (enable: boolean, active: boolean) => ({
    padding: 5,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    opacity: enable ? 1 : 0.3,
    borderWidth: 1,
    borderColor: active ? COLORS.primary : "transparent",
    backgroundColor: active ? COLORS.white : COLORS.gray,
  }),
  name: (active: boolean) => ({
    color: active ? COLORS.primary : COLORS.text,
  }),
});

export default styles;
