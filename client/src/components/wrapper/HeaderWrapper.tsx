import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

interface IProps {
  isScroll?: boolean;
  children: React.ReactNode;
}

const HeaderWrapper: React.FC<IProps> = ({ isScroll, children }) => {
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
      ]}
    >
      {children}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
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
