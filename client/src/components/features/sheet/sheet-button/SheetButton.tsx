import { Button, Text, View } from "native-base";
import React from "react";
import styles from "./sheetbutton.style";

interface IProps {
  title: string;
  isLoading: boolean;
  handlePress: () => void;
}
const SheetButton: React.FC<IProps> = ({ title, isLoading, handlePress }) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button disabled={isLoading} style={styles.button(isLoading)} onPress={handlePress}>
        <Text style={styles.buttonText(isLoading)}>{title}</Text>
      </Button>
    </View>
  );
};

export default SheetButton;
