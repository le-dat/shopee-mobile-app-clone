import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";

import Error from "../../components/shared/Error";
import Filter from "../../components/shared/Filter";
import SearchUI from "../../components/shared/SearchUI";
import MyCustomButton from "../../components/shared/buttons/MyCustomButton";
import ListCardVertical from "../../components/shared/card/ListCardVertical";
import FontWrapper from "../../components/wrapper/FontWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import { COLORS, ICON_BACK, ICON_FILTER } from "../../constants";
import { useAppSelector } from "../../hooks/useRedux";
import filterProduct from "../../services/product/filterProduct";
import FilterModal from "./components/FilterModal";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import { View } from "native-base";

const SearchResultScreen: React.FC = () => {
  const { name, createdAt, sell_number, price } = useAppSelector((state) => state.query);
  const navigation = useNavigation<any>();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`list-product-${name}-${createdAt}-${sell_number}-${price}}`],
    queryFn: () => filterProduct({ name, createdAt, sell_number, price }),
    // queryFn: () => searchProductByName(name),
  });

  if (isError) return <Error handlePress={refetch} />;

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
        <SearchUI placeholder={name} />
        <MyCustomButton {...ICON_FILTER} handlePress={handleFilter} color={COLORS.text} />
      </HeaderWrapper>

      <View style={{ marginTop: 85 }}>
        <Filter />
        <FilterModal />

        <ScrollRefreshWrapper onRefresh={refetch} style={styles.container}>
          {/* items */}
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : data.length === 0 ? (
            <Text style={[styles.empty]}>No results found</Text>
          ) : (
            <ListCardVertical products={data} />
          )}
        </ScrollRefreshWrapper>
      </View>
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
});
export default SearchResultScreen;
