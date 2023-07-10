import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import ButtonCart from "../../components/features/buttons/ButtonCart";
import Search from "../../components/shared/search/Search";
import Card from "../../components/shared/card/Card";
import Error from "../../components/shared/error/Error";
import MyCustomIcon from "../../components/shared/icon/MyCustomIcon";
import TwoRowScrollView from "../../components/shared/scroll-view/TwoRowScrollView";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import PaddingWrapper from "../../components/wrapper/PaddingWrapper";
import ProductListVerticalWrapper from "../../components/wrapper/ProductListVerticalWrapper";
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

        <View style={{ marginBottom: 80 }}>
          <ProductListVerticalWrapper>
            {products?.map((product, index) => (
              <Card key={`product-${index}`} product={product} />
            ))}
          </ProductListVerticalWrapper>
        </View>
      </ScrollView>
    </FontWrapper>
  );
};

export default HomeScreen;
