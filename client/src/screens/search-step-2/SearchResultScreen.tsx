import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import Error from "../../components/shared/Error";
import MyCustomButton from "../../components/shared/buttons/MyCustomButton";
import ListCardVertical from "../../components/shared/card/ListCardVertical";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import { COLORS, ICON_BACK } from "../../constants";
import searchProductByName from "../../services/product/searchProductByName";
import SearchInput from "../search-step-1/components/SearchInput";

interface RouteParams {
  name: string;
}

const SearchScreen: React.FC = () => {
  const router = useRoute();
  const navigation = useNavigation<any>();
  const { name } = router.params as RouteParams;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`list-product-${name}`],
    queryFn: () => searchProductByName(name),
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (!data || isError) return <Error handlePress={refetch} />;

  const handleFilter = () => {
    console.log("handleFilter");
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
        {/* items */}
        <ListCardVertical products={data} />
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
export default SearchScreen;
