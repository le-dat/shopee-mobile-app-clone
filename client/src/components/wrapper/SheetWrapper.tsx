import { BottomSheet } from "@rneui/base";
import { View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const SheetWrapper: React.FC<IProps> = ({ isOpen, children }) => {
  return (
    <BottomSheet isVisible={isOpen}>
      <View style={styles.wrapper}>
        <View style={styles.container}>{children}</View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    maxHight: "70%",
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingVertical: 15,
  },
});

export default SheetWrapper;
