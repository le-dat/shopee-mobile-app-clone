import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

interface IProps {
  text?: string;
  handlePress: () => void;
}
const Error: React.FC<IProps> = ({ text = "Refresh", handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.wrapper}>
      <Text>Opp! something went wrong. Please try again!</Text>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
});
export default Error;
