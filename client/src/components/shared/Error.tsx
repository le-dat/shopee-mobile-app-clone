import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontWrapper from "../wrapper/FontWrapper";
import { COLORS, FONTS } from "../../constants";

interface IProps {
  text?: string;
  handlePress: () => void;
}
const Error: React.FC<IProps> = ({ text = "Refresh", handlePress }) => {
  return (
    <FontWrapper style={styles.wrapper}>
      <Text style={styles.text}>Opp! something went wrong.</Text>
      <Text style={styles.text}>Please try again!</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    paddingHorizontal: 20,
    color: COLORS.text,
    textAlign: "center",
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
  },
});

export default Error;
