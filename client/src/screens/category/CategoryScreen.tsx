import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Error from "../../components/shared/Error";
import MyCustomImage from "../../components/shared/MyCustomImage";
import SearchUI from "../../components/shared/SearchUI";
import ButtonBack from "../../components/shared/buttons/ButtonBack";
import ButtonCart from "../../components/shared/buttons/ButtonCart";
import ButtonThreeDot from "../../components/shared/buttons/ButtonThreeDot";
import ListCardVertical from "../../components/shared/card/ListCardVertical";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import { COLORS } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getCategoryById from "../../services/category/getCategoryById";

interface RouteParams {
  id: string;
}

const CategoryScreen: React.FC = () => {
  const router = useRoute();
  const { id } = router.params as RouteParams;
  const { isScroll, handleScroll } = useIsScroll();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`category-${id}`],
    queryFn: () => getCategoryById(id),
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (!data || isError) return <Error handlePress={refetch} />;

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <ButtonBack />
        <SearchUI placeholder="Tìm kiếm trong danh mục" />
        <View style={{ flexDirection: "row" }}>
          <ButtonCart />
          <ButtonThreeDot />
        </View>
      </HeaderWrapper>

      <ScrollRefreshWrapper
        onScroll={handleScroll}
        onRefresh={refetch}
        style={{ backgroundColor: COLORS.gray }}
      >
        {/* introduce */}
        <View style={styles.category}>
          <View style={styles.categoryImageWrapper}>
            <MyCustomImage url={data?.image} style={styles.categoryImage} />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryName}>{data?.name}</Text>
          </View>
          <View style={styles.categoryImageWrapper}>
            <MyCustomImage url={data?.image} style={styles.categoryImage} />
          </View>
        </View>

        {/* items */}
        <ListCardVertical products={data.products} />
      </ScrollRefreshWrapper>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {},
  category: {
    backgroundColor: COLORS.primary,
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  categoryImageWrapper: {
    width: 50,
    height: 50,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  categoryInfo: {},
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
});

export default CategoryScreen;
