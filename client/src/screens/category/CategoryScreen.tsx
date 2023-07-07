import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "native-base";
import React from "react";
import { Image, Text, View } from "react-native";

import Spinner from "react-native-loading-spinner-overlay";
import Error from "../../components/common/Error";
import MyCustomIcon from "../../components/common/MyCustomIcon";
import Search from "../../components/common/Search";
import Card from "../../components/common/card/Card";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import PaddingWrapper from "../../components/wrapper/PaddingWrapper";
import { COLORS, ICON_BACK, ICON_CART, ROUTES } from "../../constants";
import useFetch from "../../hooks/useFetch";
import useIsScroll from "../../hooks/useIsScroll";
import styles from "./categoryscreen.style";

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

interface RouteParams {
  slug: string;
}

const CategoryScreen: React.FC<IProps> = ({ navigation }) => {
  const router = useRoute();
  const { slug } = router.params as RouteParams;
  const { isScroll, handleScroll } = useIsScroll();

  const {
    data: dataDetail,
    isLoading: isLoadingDetail,
    error: errorDetail,
    refetch: refetchDetail,
  } = useFetch({
    endpoint: `categories?populate=*&filters[slug][$eq]=${slug}`,
  });

  const {
    data: dataItem,
    isLoading: isLoadingItem,
    error: errorItem,
    refetch: refetchItem,
  } = useFetch({
    endpoint: `products?populate=*&filters[categories][slug][$eq]=${slug}`,
  });

  if (isLoadingDetail) return <Spinner visible={isLoadingDetail} textContent={"Loading..."} />;
  if (isLoadingItem) return <Spinner visible={isLoadingDetail} textContent={"Loading..."} />;

  if (!dataDetail || errorDetail) return <Error handlePress={refetchDetail} />;
  if (!dataItem || errorItem) return <Error handlePress={refetchDetail} />;

  const category = dataDetail?.data?.[0]?.attributes;

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <MyCustomIcon {...ICON_BACK} handlePress={() => navigation.goBack()} />

        <Search placeholder="Tìm kiếm trong danh mục" />
        <View style={{ flexDirection: "row" }}>
          <MyCustomIcon {...ICON_CART} handlePress={() => navigation.navigate(ROUTES.cart)} />
          {/* <ButtonThreeDot /> */}
        </View>
      </HeaderWrapper>

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ backgroundColor: COLORS.bgPrimary }}
      >
        {/* introduce */}
        <View style={styles.category}>
          <View style={styles.categoryImageWrapper}>
            <Image
              source={{ uri: category?.image?.data?.attributes?.url }}
              style={styles.categoryImage}
            />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryName}>{category?.name}</Text>
          </View>
          <View style={styles.categoryImageWrapper}>
            <Image
              source={{ uri: category?.image?.data?.attributes?.url }}
              style={styles.categoryImage}
            />
          </View>
        </View>

        {/* items */}
        <PaddingWrapper style={{ marginBottom: 150 }}>
          <View style={styles.productList}>
            {dataItem?.data?.map((item: any, index: number) => (
              <Card key={index} item={item.attributes} />
            ))}
          </View>
        </PaddingWrapper>
      </ScrollView>
    </FontWrapper>
  );
};

export default CategoryScreen;
