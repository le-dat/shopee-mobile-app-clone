import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";

import MyCustomIcon from "../../components/common/MyCustomIcon";
import Search from "../../components/common/Search";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import PaddingWrapper from "../../components/wrapper/PaddingWrapper";
import { ICON_CART, ICON_MESSAGE, LINKS } from "../../constants";
import useFetch from "../../hooks/useFetch";
import useIsScroll from "../../hooks/useIsScroll";
import styles from "./homescreen.style";
import Card from "../../components/common/card/Card";

const HomeScreen: React.FC = () => {
  const linkTo = useLinkTo();

  const { isScroll, handleScroll } = useIsScroll();

  const { data, isLoading, error, refetch } = useFetch({ endpoint: "products" });
  console.log(data);

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
        {/* <SwiperWrapper>
          {LIST_SWIPER.map((item, index) => (
            <Image
              key={index}
              source={require(item.image)}
              resizeMode="contain"
              style={styles.swiperItem}
              accessibilityLabel={`swiper-${item.id}`}
            />
          ))}
        </SwiperWrapper> */}

        <PaddingWrapper>{/* <TwoRowScrollView data={LIST_MENU} /> */}</PaddingWrapper>

        <PaddingWrapper style={{ marginBottom: 150 }}>
          <View style={styles.productList}>
            {data.map((item, index) => (
              <Card key={index} id={item.id} item={item.attributes} />
            ))}
          </View>
        </PaddingWrapper>
      </ScrollView>
    </FontWrapper>
  );
};

export default HomeScreen;
