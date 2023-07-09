import { Icon } from "@rneui/themed";
import React from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { COLORS } from "../../../constants";
import styles from "./mycustomicon.style";

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
const MyCustomIcon: React.FC<IProps> = ({
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

export default MyCustomIcon;
