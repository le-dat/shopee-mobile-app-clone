import { useNavigation, useRoute, useScrollToTop } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useQuery } from "@tanstack/react-query";
import { ScrollView, Text } from "native-base";
import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import ButtonCart from "../../components/features/buttons/ButtonCart";
import Search from "../../components/shared/search/Search";
import SheetAddProduct from "../../components/features/sheet/SheetAddProduct";
import BottomAction from "../../components/shared/bottom-action/BottomAction";
import Card from "../../components/shared/card/Card";
import Error from "../../components/shared/error/Error";
import MyCustomIcon from "../../components/shared/icon/MyCustomIcon";
import ProductCarousel from "../../components/shared/product/ProductCarousel";
import ProductDetail from "../../components/shared/product/ProductDetail";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import HeadingWrapper from "../../components/wrapper/HeadingWrapper";
import ProductListHorizontalWrapper from "../../components/wrapper/ProductListHorizontalWrapper copy";
import { COLORS, ICON_ARROW_NEXT, ICON_BACK, ICON_SHARE, ROUTES } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getProductById from "../../services/product/getProductById";
import styles from "./productscreen.style";
import ButtonThreeDot from "../../components/features/buttons/ButtonThreeDot";

interface RouteParams {
  id: string;
}

const ProductScreen: React.FC = () => {
  const ref = useRef(null);
  const router = useRoute();
  const navigation = useNavigation<any>();
  const { isScroll, handleScroll } = useIsScroll();

  const { id } = router.params as RouteParams;

  useScrollToTop(ref);

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
      <HeaderWrapper isScroll={isScroll}>
        <MyCustomIcon {...ICON_BACK} handlePress={() => navigation.goBack()} />

        <Search placeholder={data?.categories?.[0]?.name} />
        <View style={{ flexDirection: "row" }}>
          <MyCustomIcon {...ICON_SHARE} handlePress={() => console.log("ICON_SHARE")} />
          <ButtonCart />
          <ButtonThreeDot />
        </View>
      </HeaderWrapper>

      <ScrollView
        ref={ref}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.container}
      >
        {/* product image carousel */}
        <ProductCarousel data={data.images} />
        {/* product detail */}
        <ProductDetail data={data} />
        {/* product relative */}
        {data?.relative?.length > 0 && (
          <View>
            <HeadingWrapper>
              <Text style={styles.title}>Sản phẩm liên quan</Text>
              <TouchableOpacity onPress={() => handleNavigateToCategory()} style={styles.subTitle}>
                <Text style={{ color: COLORS.primary }}>Xem tất cả</Text>
                <Icon {...ICON_ARROW_NEXT} color={COLORS.primary} style={styles.icon} />
              </TouchableOpacity>
            </HeadingWrapper>

            <ProductListHorizontalWrapper>
              {data?.relative?.map((item, index) => (
                <Card key={`card-${index}`} product={item} border />
              ))}
            </ProductListHorizontalWrapper>
          </View>
        )}
      </ScrollView>

      <BottomAction product={data} />
    </FontWrapper>
  );
};

export default ProductScreen;
