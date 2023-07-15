import { Input, Stack, View } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import MyCustomButton from "../../../components/shared/buttons/MyCustomButton";
import { COLORS, ICON_CAMERA, ICON_SEARCH, ROUTES } from "../../../constants";
import useDebounce from "../../../hooks/useDebounce";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  queries: string;
  setQueries: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}
const SearchInput: React.FC<IProps> = ({
  placeholder = "Nhập từ khóa...",
  queries,
  setQueries,
}) => {
  const navigation = useNavigation<any>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debounce = useDebounce({ value: searchValue });

  const handleNavigationToSearchResult = (name: string) => {
    navigation.navigate(ROUTES.searchResult, { name });
  };

  const handleSearch = (text: string) => {
    if (!text.startsWith(" ")) {
      setSearchValue(text);
    }
  };

  useEffect(() => {
    if (!debounce.trim()) {
      setQueries("");
    } else {
      setQueries(debounce);
    }
  }, [debounce]);

  return (
    <View style={styles.wrapper}>
      <Stack style={styles.inputWrapper}>
        <Input
          size="md"
          variant="unstyled"
          value={searchValue}
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
        handlePress={() => handleNavigationToSearchResult(searchValue)}
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
