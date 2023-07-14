import React, { useEffect, useRef } from "react";
import { Animated, StyleProp } from "react-native";

import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { ViewStyle } from "react-native";

interface IProps {
  isScroll?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const HeaderWrapper: React.FC<IProps> = ({ isScroll, children, style }) => {
  const headerBackgroundOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isScroll) {
      Animated.timing(headerBackgroundOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(headerBackgroundOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [isScroll]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          backgroundColor: headerBackgroundOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: ["red", COLORS.primary],
          }),
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};
const styles = StyleSheet.create<any>({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 5,
  },
});

export default HeaderWrapper;
