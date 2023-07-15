import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Text } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import Error from "../../components/shared/Error";
import SearchUI from "../../components/shared/SearchUI";
import ButtonCart from "../../components/shared/buttons/ButtonCart";
import ButtonThreeDot from "../../components/shared/buttons/ButtonThreeDot";
import MyCustomButton from "../../components/shared/buttons/MyCustomButton";
import Card from "../../components/shared/card/Card";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import HeadingWrapper from "../../components/wrapper/HeadingWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import { COLORS, ICON_ARROW_NEXT, ICON_BACK, ICON_SHARE, ROUTES } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getProductById from "../../services/product/getProductById";
import BottomAction from "./components/BottomAction";
import Carousel from "./components/Carousel";
import Content from "./components/Content";

interface RouteParams {
  id: string;
}

const ProductScreen: React.FC = () => {
  const router = useRoute();
  const navigation = useNavigation<any>();
  const { isScroll, handleScroll } = useIsScroll();

  const { id } = router.params as RouteParams;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (!data || isError) return <Error handlePress={refetch} />;

  const handleNavigateToCategory = () => {
    navigation.navigate(ROUTES.category, { id: data?.categories?.[0]?._id });
  };

  return (
    <FontWrapper style={styles.wrapper}>
      {/* header */}
      <HeaderWrapper isScroll={isScroll}>
        <MyCustomButton {...ICON_BACK} handlePress={() => navigation.goBack()} />

        <SearchUI placeholder={data?.categories?.[0]?.name} />
        <View style={{ flexDirection: "row" }}>
          <MyCustomButton {...ICON_SHARE} handlePress={() => console.log("ICON_SHARE")} />
          <ButtonCart />
          <ButtonThreeDot />
        </View>
      </HeaderWrapper>

      <ScrollRefreshWrapper onScroll={handleScroll} onRefresh={refetch} style={styles.container}>
        {/* product image carousel */}
        <Carousel data={data.images} />
        {/* product detail */}
        <Content data={data} />
        {/* product relative */}
        {data?.relative?.length > 0 && (
          <View style={{ paddingBottom: 80 }}>
            <HeadingWrapper>
              <Text style={styles.title}>Sản phẩm liên quan</Text>
              <TouchableOpacity onPress={() => handleNavigateToCategory()} style={styles.subTitle}>
                <Text style={{ color: COLORS.primary }}>Xem tất cả</Text>
                <Icon {...ICON_ARROW_NEXT} color={COLORS.primary} style={styles.icon} />
              </TouchableOpacity>
            </HeadingWrapper>

            <FlatList
              data={data?.relative}
              renderItem={({ item }) => <Card product={item} border horizontal />}
              keyExtractor={(item) => item._id}
              horizontal
            />
          </View>
        )}
      </ScrollRefreshWrapper>

      <BottomAction product={data} />
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  title: {
    flex: 1,
  },
  subTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {},
});

export default ProductScreen;
