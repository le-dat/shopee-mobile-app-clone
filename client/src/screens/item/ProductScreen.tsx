import { useRoute, useScrollToTop } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useQuery } from "@tanstack/react-query";
import { ScrollView, Text } from "native-base";
import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";

import { Icon } from "@rneui/themed";
import Spinner from "react-native-loading-spinner-overlay";
import ButtonCart from "../../components/common/ButtonCart";
import BottomAction from "../../components/common/bottom-action/BottomAction";
import MyCustomSheet from "../../components/common/bottom-sheet/MyCustomSheet";
import Card from "../../components/common/card/Card";
import Error from "../../components/common/error/Error";
import MyCustomIcon from "../../components/common/icon/MyCustomIcon";
import ProductCarousel from "../../components/common/product/ProductCarousel";
import ProductDetail from "../../components/common/product/ProductDetail";
import Search from "../../components/common/search/Search";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import HeadingWrapper from "../../components/wrapper/HeadingWrapper";
import { COLORS, ICON_ARROW_NEXT, ICON_BACK, ICON_SHARE, ROUTES } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getProductById from "../../services/product/getProductById";
import styles from "./productscreen.style";

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

interface RouteParams {
  id: string;
}

const ProductScreen: React.FC<IProps> = ({ navigation }) => {
  const ref = useRef(null);
  const router = useRoute();
  const { id } = router.params as RouteParams;
  const { isScroll, handleScroll } = useIsScroll();

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
          {/* <ButtonThreeDot /> */}
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

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.productList}
            >
              {data?.relative?.map((item, index) => (
                <Card key={`card-${index}`} product={item} border />
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>

      <BottomAction />
      <MyCustomSheet product={data} />
    </FontWrapper>
  );
};

export default ProductScreen;
