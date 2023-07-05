import { Input, Stack } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { COLORS, ICON_SEARCH } from "../../constants";
import MyCustomIcon from "./MyCustomIcon";

interface IProps {
  placeholder?: string;
}
const Search: React.FC<IProps> = ({ placeholder = "Nhập từ khóa..." }) => {
  const [value, setValue] = useState<string>("");

  const handleSearch = (text: string) => {
    setValue(text);
  };

  return (
    <Stack style={styles.wrapper}>
      <Input
        size="md"
        variant="unstyled"
        value={value}
        onChangeText={handleSearch}
        leftElement={
          <MyCustomIcon
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 5,
  },
});

export default Search;
