import { Input, Stack, View } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MyCustomButton from "../../../components/shared/buttons/MyCustomButton";
import { COLORS, ICON_CAMERA, ICON_SEARCH, ROUTES } from "../../../constants";
import useDebounce from "../../../hooks/useDebounce";
import { useAppDispatch } from "../../../hooks/useRedux";
import { setQueries } from "../../../redux/reducers/querySlice";

interface IProps {
  placeholder?: string;
}
const SearchInput: React.FC<IProps> = ({ placeholder = "Nhập từ khóa..." }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const [searchValue, setSearchValue] = useState<string>("");
  const debounce = useDebounce({ value: searchValue });

  const handleNavigationToSearchResult = () => {
    dispatch(setQueries({ name: searchValue }));
    navigation.navigate(ROUTES.searchResult);
  };

  const handleSearch = (text: string) => {
    if (!text.startsWith(" ")) {
      setSearchValue(text);
    }
  };

  useEffect(() => {
    if (!debounce.trim()) {
      dispatch(setQueries({ name: "" }));
    } else {
      dispatch(setQueries({ name: debounce }));
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
        handlePress={handleNavigationToSearchResult}
        color={COLORS.white}
        style={styles.iconSearch}
        size={20}
      />
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
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
    padding: 10,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default SearchInput;
