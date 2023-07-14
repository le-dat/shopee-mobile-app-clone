import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import Error from "../../components/shared/Error";
import MyCustomButton from "../../components/shared/buttons/MyCustomButton";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import { COLORS, ICON_BACK, ROUTES } from "../../constants";
import getCategories from "../../services/category/getCategories";
import SearchInput from "./components/SearchInput";

const SearchResultScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`categories`],
    queryFn: getCategories,
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (!data || isError) return <Error handlePress={refetch} />;

  const handleNavigation = (id: string) => {
    navigation.navigate(ROUTES.category, { id });
  };

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
        {data.map((category, index) => (
          <TouchableOpacity
            key={`category-${category._id}-${index}`}
            onPress={() => handleNavigation(category._id)}
          >
            <Text style={styles.result}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollRefreshWrapper>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  header: {
    backgroundColor: COLORS.white,
  },
  container: {},
  results: {},
  result: {
    color: COLORS.text,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
});
export default SearchResultScreen;
