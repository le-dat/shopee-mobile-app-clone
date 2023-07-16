import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { COLORS, ICON_SEARCH, ROUTES } from "../../constants";
import MyCustomButton from "./buttons/MyCustomButton";

interface IProps {
  placeholder?: string;
}
const SearchUI: React.FC<IProps> = ({ placeholder = "Nhập từ khóa..." }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate(ROUTES.search);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.button}>
        <MyCustomButton
          {...ICON_SEARCH}
          handlePress={() => console.log("ICON_SEARCH")}
          color={COLORS.text}
          size={20}
          style={{ paddingLeft: 10, paddingRight: 0 }}
        />
        <Text>{placeholder}</Text>
      </View>
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
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});

export default SearchUI;
