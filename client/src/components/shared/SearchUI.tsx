import { useNavigation } from "@react-navigation/native";
import { Input, Stack } from "native-base";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";

import { COLORS, ICON_SEARCH, ROUTES } from "../../constants";
import MyCustomButton from "./buttons/MyCustomButton";

interface IProps {
  placeholder?: string;
}
const SearchUI: React.FC<IProps> = ({ placeholder = "Nhập từ khóa..." }) => {
  const inputRef = useRef(null);
  const navigation = useNavigation<any>();

  const handleFocus = () => {
    if (inputRef.current) {
      navigation.navigate(ROUTES.search);
    }
  };

  return (
    <Stack style={styles.wrapper}>
      <Input
        ref={inputRef}
        size="md"
        variant="unstyled"
        onFocus={handleFocus}
        leftElement={
          <MyCustomButton
            {...ICON_SEARCH}
            handlePress={() => console.log("ICON_SEARCH")}
            color={COLORS.text}
            style={{ paddingLeft: 10, paddingRight: 0 }}
          />
        }
        placeholder={placeholder}
      />
    </Stack>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 5,
  },
});

export default SearchUI;
