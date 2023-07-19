import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";

import Error from "../../components/shared/Error";
import MyCustomButton from "../../components/shared/buttons/MyCustomButton";
import FontWrapper from "../../components/wrapper/FontWrapper";
// import HeaderBackgroundOpacity from "../../components/animated/HeaderBackgroundAnimation";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import { COLORS, ICON_BACK, ROUTES } from "../../constants";
import { useAppSelector } from "../../hooks/useRedux";
import getCategories from "../../services/category/getCategories";
import searchCategoryByName from "../../services/category/searchCategoryByName";
import SearchInput from "./components/SearchInput";

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { name } = useAppSelector((state) => state.query);

  const handleNavigationToCategory = (id: string) => {
    navigation.navigate(ROUTES.category, { id });
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`search-${JSON.stringify(name)}`],
    queryFn: () => {
      if (name.length > 0) return searchCategoryByName(name);
      return getCategories();
    },
  });

  if (isError) return <Error handlePress={refetch} />;

  return (
    <FontWrapper>
      <HeaderWrapper style={styles.header}>
        <MyCustomButton
          {...ICON_BACK}
          handlePress={() => navigation.goBack()}
          color={COLORS.text}
        />
        <SearchInput />
      </HeaderWrapper>

      <ScrollRefreshWrapper onRefresh={refetch} style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          data?.map((category, index) => (
            <TouchableOpacity
              key={`category-${index}`}
              onPress={() => handleNavigationToCategory(category._id)}
            >
              <Text style={styles.result}>{category.name}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollRefreshWrapper>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  header: {
    backgroundColor: COLORS.white,
  },
  container: {},
  empty: {
    textAlign: "center",
  },
  results: {},
  result: {
    color: COLORS.text,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
});
export default SearchScreen;
