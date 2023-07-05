import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, View } from "react-native";

import Spinner from "react-native-loading-spinner-overlay";
import MyCustomIcon from "../../components/common/MyCustomIcon";
import Search from "../../components/common/Search";
import Card from "../../components/common/card/Card";
import TwoRowScrollView from "../../components/common/carousel/TwoColumnScrollView";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import PaddingWrapper from "../../components/wrapper/PaddingWrapper";
import SwiperWrapper from "../../components/wrapper/SwiperWrapper";
import { ICON_CART, ICON_MESSAGE, IMAGE_SWIPER, LINKS } from "../../constants";
import useFetch from "../../hooks/useFetch";
import useIsScroll from "../../hooks/useIsScroll";
import styles from "./homescreen.style";
import Error from "../../components/common/Error";

const HomeScreen: React.FC = () => {
  const linkTo = useLinkTo();

  const { isScroll, handleScroll } = useIsScroll();

  const {
    data: dataItem,
    isLoading: isLoadingItem,
    error: errorItem,
    refetch: refetchItem,
  } = useFetch({ endpoint: "products?populate=*" });

  const {
    data: dataCategory,
    isLoading: isLoadingCategory,
    error: errorCategory,
    refetch: refetchCategory,
  } = useFetch({ endpoint: "categories?populate=*" });

  if (isLoadingItem) return <Spinner visible={isLoadingItem} textContent={"Loading..."} />;
  if (isLoadingCategory) return <Spinner visible={isLoadingCategory} textContent={"Loading..."} />;

  if (errorItem) return <Error handlePress={refetchItem} />;
  if (errorCategory) return <Error handlePress={refetchCategory} />;

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <Search />
        <View style={{ flexDirection: "row" }}>
          <MyCustomIcon {...ICON_CART} handlePress={() => linkTo(LINKS.cart)} />
          <MyCustomIcon {...ICON_MESSAGE} handlePress={() => linkTo(LINKS.message)} />
        </View>
      </HeaderWrapper>

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <SwiperWrapper>
          {IMAGE_SWIPER.map((item, index) => (
            <Image
              key={index}
              source={item.image}
              resizeMode="contain"
              style={styles.swiperItem}
              accessibilityLabel={`swiper-${item.id}`}
            />
          ))}
        </SwiperWrapper>

        <PaddingWrapper>
          <TwoRowScrollView data={dataCategory?.data} />
        </PaddingWrapper>

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

export default HomeScreen;
