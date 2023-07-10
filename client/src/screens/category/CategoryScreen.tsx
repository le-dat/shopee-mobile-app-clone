import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import Search from "../../components/shared/search/Search";
import Card from "../../components/shared/card/Card";
import Error from "../../components/shared/error/Error";
import MyCustomIcon from "../../components/shared/icon/MyCustomIcon";
import MyCustomImage from "../../components/shared/image/MyCustomImage";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import ProductListVerticalWrapper from "../../components/wrapper/ProductListVerticalWrapper";
import { COLORS, ICON_BACK, ICON_CART, ROUTES } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getCategoryById from "../../services/category/getCategoryById";
import styles from "./categoryscreen.style";
import ButtonThreeDot from "../../components/features/buttons/ButtonThreeDot";

interface RouteParams {
  id: string;
}

const CategoryScreen: React.FC = () => {
  const router = useRoute();
  const navigation = useNavigation<any>();
  const { id } = router.params as RouteParams;
  const { isScroll, handleScroll } = useIsScroll();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [`category-${id}`],
    queryFn: () => getCategoryById(id),
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (!data || error) return <Error handlePress={refetch} />;

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <MyCustomIcon {...ICON_BACK} handlePress={() => navigation.goBack()} />

        <Search placeholder="Tìm kiếm trong danh mục" />
        <View style={{ flexDirection: "row" }}>
          <MyCustomIcon {...ICON_CART} handlePress={() => navigation.navigate(ROUTES.cart)} />
          <ButtonThreeDot />
        </View>
      </HeaderWrapper>

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
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
        <ProductListVerticalWrapper style={{ marginBottom: 80 }}>
          {data?.products?.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </ProductListVerticalWrapper>
      </ScrollView>
    </FontWrapper>
  );
};

export default CategoryScreen;
