import { useNavigation } from "@react-navigation/native";
import { Icon, Text } from "@rneui/themed";
import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from "react-native";

import { COLORS, ICON_SEARCH, ROUTES } from "../../constants";

interface IProps {
  placeholder?: string;
  styleText?: ViewStyle;
  style?: any;
}
const SearchUI: React.FC<IProps> = ({ placeholder = "Nhập từ khóa...", styleText, style }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate(ROUTES.search);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.button, style]}>
        <Icon {...ICON_SEARCH} color={COLORS.text} size={20} />
        <Text style={styleText}>{placeholder}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create<any>({
  button: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    padding: 10,
  },
});

export default SearchUI;
