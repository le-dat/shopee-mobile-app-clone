import { Input, Stack } from "native-base";
import React, { useRef, useState } from "react";

import { COLORS, ICON_SEARCH, ROUTES } from "../../../constants";
import MyCustomIcon from "../icon/MyCustomIcon";
import styles from "./search.style";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  placeholder?: string;
}
const Search: React.FC<IProps> = ({ placeholder = "Nhập từ khóa..." }) => {
  const inputRef = useRef(null);
  const navigation = useNavigation<any>();
  const [value, setValue] = useState<string>("");

  const handleSearch = (text: string) => {
    setValue(text);
  };

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
        value={value}
        onChangeText={handleSearch}
        onFocus={handleFocus}
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
