import { useLinkTo } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import MyCustomIcon from "../../components/common/MyCustomIcon";
import Search from "../../components/common/Search";
import TwoRowScrollView from "../../components/common/carousel/TwoColumnScrollView";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import PaddingWrapper from "../../components/wrapper/PaddingWrapper";
import { ICON_CART, ICON_MESSAGE, LINKS } from "../../constants";
import useFetch from "../../hooks/useFetch";
import useIsScroll from "../../hooks/useIsScroll";
import styles from "./homescreen.style";
import getProducts from "../../request/getProducts";
import Config from "react-native-config";
import { ItemIProps } from "../../types/data";
import Card from "../../components/common/card/Card";
import axios from "axios";

const HomeScreen: React.FC = () => {
  const linkTo = useLinkTo();

  const { isScroll, handleScroll } = useIsScroll();
  const [data, setData] = useState([]);
  // const [data, setData] = React.useState<ItemIProps[]>([]);
  // const { data, isLoading, error } = useFetch({
  //   endpoint: "search",
  //   query: {
  //     query: "React Native developer",
  //     num_pages: "1",
  //   },
  //   method: "GET",
  // });
  // const { data, isLoading, error, refetch } = useFetch("products", "GET");

  const getMovies = async () => {
    try {
      // const response = await axios.get("https://reactnative.dev/movies.json");
      // const json = await response.data;
      // setData(json.movies);
      // console.log(json.movies);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer b72168c9e0b108292345aa1e42aa425ce8bf301dc0534d83305b593b0f251314dd21744ecc5a9c8f3b71308f07cc47fb722953dfdb080ec50c1b2bc1ebcdec55a157cfe2c6fe8161aae1aa472cceb4f2fe3abdd263694571426b9525aad21e5931ddca260007fa341fe7eba7eb6ba12f6e9fbaeb725b62f954e96a1a3fd2c995`,
      };
      const { data } = await axios.get(
        "https://shoe-store-backend-05rp.onrender.com/api/products?populate=*",
        {
          headers,
        }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
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
            {/* {data.map((item, index) => (
              <Text key={index}>dat dep trai</Text>
            ))} */}
          </View>
        </PaddingWrapper>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
