import { Icon } from "@rneui/themed";
import React from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

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
  style?: StyleProp<ViewStyle>;
}
const MyCustomButton: React.FC<IProps> = ({
  name,
  type,
  handlePress,
  rounded = false,
  badgeValue = 0,
  color = COLORS.white,
  size,
  style,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        name={name}
        type={type}
        color={color}
        size={size}
        containerStyle={[styles.icon(rounded), style]}
      />

      {/* badged */}
      {badgeValue > 0 && (
        <View style={styles.badge}>
          <Text style={styles.text}>{badgeValue}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create<any>({
  icon: (rounded: boolean) => ({
    padding: 10,
    borderRadius: rounded ? 50 : 0,
  }),
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingHorizontal: 6,
    borderRadius: 50,
    backgroundColor: COLORS.yellow,
  },
  text: {
    color: COLORS.text,
  },
});

export default MyCustomButton;
