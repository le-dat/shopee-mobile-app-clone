import { Icon } from "@rneui/themed";
import React from "react";
import { Animated, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

interface IProps {
  name: string;
  type: string;
  handlePress?: () => void;
  rounded?: boolean;
  badgeValue?: number;
  color?: string;
  size?: number;
  style?: any;
  disabled?: boolean;
}
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const MyCustomButton: React.FC<IProps> = ({
  name,
  type,
  handlePress,
  rounded = false,
  badgeValue = 0,
  color = COLORS.white,
  size,
  style,
  disabled = false,
}) => {
  return (
    <AnimatedTouchableOpacity onPress={handlePress} style={[styles.wrapper(rounded), style]}>
      <Icon name={name} type={type} color={color} size={size} disabled={disabled} />

      {badgeValue > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeValue}</Text>
        </View>
      )}
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: (rounded: boolean) => ({
    padding: 5,
    backgroundColor: rounded ? COLORS.grayDark : "transparent",
    borderRadius: rounded ? 50 : 0,
    marginHorizontal: 5,
  }),
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    paddingHorizontal: 6,
    borderRadius: 50,
    backgroundColor: COLORS.yellow,
  },
  badgeText: {
    color: COLORS.text,
  },
});

export default MyCustomButton;
