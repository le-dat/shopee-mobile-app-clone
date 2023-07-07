import { Icon } from "@rneui/themed";
import React from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { COLORS } from "../../constants";

interface IProps {
  name: string;
  type: string;
  handlePress: () => void;
  badgeValue?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
const MyCustomIcon: React.FC<IProps> = ({
  name,
  type,
  handlePress,
  badgeValue = 0,
  color = "#fff",
  style,
}) => {
  const containerStyle = [{ padding: 10, borderRadius: 50 }, style];

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name={name} type={type} color={color} containerStyle={containerStyle} />

      {/* badged */}
      {badgeValue > 0 && (
        <View style={styles.badge}>
          <Text style={styles.text}>{badgeValue}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
export default MyCustomIcon;
