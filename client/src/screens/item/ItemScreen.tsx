import { useLinkTo, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "native-base";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Spinner from "react-native-loading-spinner-overlay";
import Error from "../../components/common/Error";
import MyCustomIcon from "../../components/common/MyCustomIcon";
import Search from "../../components/common/Search";
import Card from "../../components/common/card/Card";
import ItemCarousel from "../../components/common/carousel/ItemCarousel";
import Sell from "../../components/common/sell/Sell";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import {
  COLORS,
  ICON_BACK,
  ICON_CART,
  ICON_HEART,
  ICON_MESSAGE,
  ICON_SHARE,
  LINKS,
} from "../../constants";
import useFetch from "../../hooks/useFetch";
import useIsScroll from "../../hooks/useIsScroll";
import { formatCurrencyVietnam } from "../../utils/common";
import styles from "./itemscreen.style";
import BottomAction from "../../components/common/BottomAction";

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

interface RouteParams {
  slug: string;
}

const ItemScreen: React.FC<IProps> = ({ navigation }) => {
  const linkTo = useLinkTo();
  const router = useRoute();
  const nav = useNavigation<any>();
  const { slug } = router.params as RouteParams;
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const { isScroll, handleScroll } = useIsScroll();

  const {
    data: dataDetail,
    isLoading: isLoadingDetail,
    error: errorDetail,
    refetch: refetchDetail,
  } = useFetch({
    endpoint: `products?populate=*&filters[slug][$eq]=${slug}`,
  });

  const {
    data: dataRelative,
    isLoading: isLoadingRelative,
    error: errorRelative,
    refetch: refetchRelative,
  } = useFetch({
    endpoint: `products?populate=*&filters[slug][$ne]=${slug}`,
  });

  if (isLoadingDetail) return <Spinner visible={isLoadingDetail} textContent={"Loading..."} />;
  if (isLoadingRelative) return <Spinner visible={isLoadingRelative} textContent={"Loading..."} />;
  if (!dataDetail || errorDetail) return <Error handlePress={refetchDetail} />;
  if (!dataRelative || errorRelative) return <Error handlePress={refetchRelative} />;

  const item = dataDetail?.data?.[0]?.attributes;
  const category = item?.categories?.data?.[0]?.attributes;

  const handleNavigateToCategory = () => {
    nav.navigate("Category", { slug: category?.slug });
  };

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <MyCustomIcon {...ICON_BACK} handlePress={() => navigation.goBack()} />

        <Search placeholder={category?.name} />
        <View style={{ flexDirection: "row" }}>
          <MyCustomIcon {...ICON_SHARE} handlePress={() => console.log("ICON_SHARE")} />
          <MyCustomIcon {...ICON_CART} handlePress={() => linkTo(LINKS.cart)} />
          {/* <ButtonThreeDot /> */}
        </View>
      </HeaderWrapper>

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ backgroundColor: COLORS.bgPrimary }}
      >
        {/* image */}
        <ItemCarousel data={item?.image} />
        {/* detail */}
        <View style={styles.container}>
          <View style={[styles.row]}>
            <Text numberOfLines={2} style={styles.title}>
              {item?.name}
            </Text>
            <Sell price={item?.price} originalPrice={item?.original_price} />
          </View>

          <View style={styles.row}>
            <Text style={styles.price}>{formatCurrencyVietnam(item?.price)}</Text>
            <Text style={styles.voucher}>Mua để nhận quà</Text>
          </View>
          <Text style={styles.originPrice}>{formatCurrencyVietnam(item?.original_price)}</Text>

          <View
            style={[
              styles.row,
              { justifyContent: "space-between", alignItems: "center", marginTop: 10 },
            ]}
          >
            <Text>Đã bán 5.2k</Text>
            <View style={{ flexDirection: "row" }}>
              <MyCustomIcon
                {...ICON_HEART(isHeart)}
                handlePress={() => setIsHeart(!isHeart)}
                color={isHeart ? COLORS.primary : COLORS.text}
              />
              <MyCustomIcon
                {...ICON_MESSAGE}
                handlePress={() => linkTo(LINKS.message)}
                color={COLORS.text}
              />
            </View>
          </View>
        </View>

        <View style={[styles.container]}>
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <Text style={styles.title}>Sản phẩm liên quan</Text>
            <TouchableOpacity
              onPress={() => handleNavigateToCategory()}
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={{ color: COLORS.primary }}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20, marginBottom: 150 }}
          >
            {dataRelative?.data?.map((item: any, index: number) => (
              <Card key={`card-${index}`} item={item?.attributes} border />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <BottomAction id={item?.id} />
    </FontWrapper>
  );
};

export default ItemScreen;
