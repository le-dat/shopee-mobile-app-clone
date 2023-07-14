import { Button, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

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

export default SheetButton;
