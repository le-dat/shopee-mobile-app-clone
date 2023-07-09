import { Input, Stack } from "native-base";
import React, { useState } from "react";

import { COLORS, ICON_SEARCH } from "../../../constants";
import MyCustomIcon from "../icon/MyCustomIcon";
import styles from "./search.style";

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

export default Search;
