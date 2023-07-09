import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { useQuery } from "@tanstack/react-query";
import ButtonCart from "../../components/common/ButtonCart";
import Error from "../../components/common/error/Error";
import MyCustomIcon from "../../components/common/icon/MyCustomIcon";
import Search from "../../components/common/search/Search";
import Card from "../../components/common/card/Card";
import TwoRowScrollView from "../../components/common/scroll-view/TwoRowScrollView";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import PaddingWrapper from "../../components/wrapper/PaddingWrapper";
import SwiperWrapper from "../../components/wrapper/SwiperWrapper";
import { ICON_MESSAGE, ROUTES } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getHomeScreen from "../../services/getHomeScreen";
import styles from "./homescreen.style";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const { isScroll, handleScroll } = useIsScroll();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["home"],
    queryFn: getHomeScreen,
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (isError) return <Error handlePress={refetch} />;

  const [sliders, categories, products] = data;

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <Search />
        <View style={{ flexDirection: "row" }}>
          <ButtonCart />
          <MyCustomIcon {...ICON_MESSAGE} handlePress={() => navigation.navigate(ROUTES.message)} />
        </View>
      </HeaderWrapper>

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <SwiperWrapper>
          {sliders?.map((slider, index) => (
            <Image
              key={index}
              source={{ uri: slider?.image }}
              style={styles.swiperItem}
              accessibilityLabel={`slider-${index}`}
            />
          ))}
        </SwiperWrapper>

        <PaddingWrapper>
          <TwoRowScrollView data={categories} />
        </PaddingWrapper>

        <PaddingWrapper style={{ marginBottom: 100 }}>
          <View style={styles.productList}>
            {products?.map((product, index) => (
              <Card key={`product-${index}`} product={product} />
            ))}
          </View>
        </PaddingWrapper>
      </ScrollView>
    </FontWrapper>
  );
};

export default HomeScreen;
