import { Icon } from "@rneui/themed";
import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface IProps {
  name: string;
  type: string;
  handlePress: () => void;
  color?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}
const MyCustomIcon: React.FC<IProps> = ({
  name,
  type,
  handlePress,
  color = "#fff",
  backgroundColor = "transparent",
  style,
}) => {
  const containerStyle = [{ backgroundColor, padding: 10, borderRadius: 50 }, style];

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name={name} type={type} color={color} containerStyle={containerStyle} />
    </TouchableOpacity>
  );
};

export default MyCustomIcon;
