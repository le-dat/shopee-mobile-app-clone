import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import Error from "../../components/shared/Error";
import SearchUI from "../../components/shared/SearchUI";
import ButtonCart from "../../components/shared/buttons/ButtonCart";
import ButtonMessage from "../../components/shared/buttons/ButtonMessage";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import useIsScroll from "../../hooks/useIsScroll";
import getHomeScreen from "../../services/getHomeScreen";
import SwiperSlide from "./components/SwiperSlide";
import TwoRowNav from "./components/TwoRowNav";
import ListCardVertical from "../../components/shared/card/ListCardVertical";

const HomeScreen: React.FC = () => {
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
        <SearchUI />
        <View style={{ flexDirection: "row" }}>
          <ButtonCart />
          <ButtonMessage />
        </View>
      </HeaderWrapper>

      <ScrollRefreshWrapper onScroll={handleScroll} onRefresh={refetch} style={styles.container}>
        <SwiperSlide data={sliders} />

        <View style={styles.container}>
          <TwoRowNav data={categories} />
        </View>

        <ListCardVertical products={products} />
      </ScrollRefreshWrapper>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    marginBottom: 10,
  },
});

export default HomeScreen;
