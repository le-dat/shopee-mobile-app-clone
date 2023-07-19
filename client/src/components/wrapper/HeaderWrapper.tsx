import React from "react";
import { Animated, StyleSheet } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: any;
}

const HeaderWrapper: React.FC<IProps> = ({ children, style }) => {
  return <Animated.View style={[styles.wrapper, style]}>{children}</Animated.View>;
};

const styles = StyleSheet.create<any>({
  wrapper: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 10,
  },
});

export default HeaderWrapper;
