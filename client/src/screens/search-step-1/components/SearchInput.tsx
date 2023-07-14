import { Input, Stack, View } from "native-base";
import React, { useState } from "react";

import { StyleSheet } from "react-native";
import MyCustomButton from "../../../components/shared/buttons/MyCustomButton";
import { COLORS, ICON_CAMERA, ICON_SEARCH } from "../../../constants";

interface IProps {
  placeholder?: string;
}
const SearchInput: React.FC<IProps> = ({ placeholder = "Nhập từ khóa..." }) => {
  const [value, setValue] = useState<string>("");

  const handleSearch = (text: string) => {
    setValue(text);
  };

  return (
    <View style={styles.wrapper}>
      <Stack style={styles.inputWrapper}>
        <Input
          size="md"
          variant="unstyled"
          value={value}
          onChangeText={handleSearch}
          placeholder={placeholder}
          style={styles.input}
          rightElement={
            <MyCustomButton
              {...ICON_CAMERA}
              handlePress={() => console.log("ICON_CAMERA")}
              color={COLORS.grayDark}
              style={styles.iconCamera}
            />
          }
        />
      </Stack>
      <MyCustomButton
        {...ICON_SEARCH}
        handlePress={() => console.log("ICON_SEARCH")}
        color={COLORS.white}
        style={styles.iconSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    height: 40,
  },
  iconCamera: {
    paddingLeft: 0,
    paddingRight: 10,
  },
  iconSearch: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
});

export default SearchInput;
