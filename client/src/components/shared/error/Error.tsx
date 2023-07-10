import React from "react";
import { Text, TouchableOpacity } from "react-native";

import FontWrapper from "../../wrapper/FontWrapper";
import styles from "./error.style";

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

export default Error;
