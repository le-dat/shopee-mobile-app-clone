import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "native-base";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useQuery } from "@tanstack/react-query";
import Spinner from "react-native-loading-spinner-overlay";
import Error from "../../components/common/Error";
import MyCustomIcon from "../../components/common/MyCustomIcon";
import Search from "../../components/common/Search";
import BottomAction from "../../components/common/bottom/BottomAction";
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
  ROUTES,
} from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getProductById from "../../services/product/getProductById";
import { formatCurrencyVietnam, formatSellNumber } from "../../utils/common";
import styles from "./productscreen.style";
import Card from "../../components/common/card/Card";

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

interface RouteParams {
  id: string;
}

const ProductScreen: React.FC<IProps> = ({ navigation }) => {
  const router = useRoute();
  const { id } = router.params as RouteParams;
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const { isScroll, handleScroll } = useIsScroll();

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
          <MyCustomIcon {...ICON_CART} handlePress={() => navigation.navigate(ROUTES.cart)} />
          {/* <ButtonThreeDot /> */}
        </View>
      </HeaderWrapper>

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={styles.container}>
        {/* image */}
        <ItemCarousel data={data.images} />
        {/* detail */}
        <View style={styles.detail}>
          <View style={[styles.row]}>
            <Text numberOfLines={2} style={styles.title}>
              {data?.name}
            </Text>
            <Sell price={data?.price} originalPrice={data?.original_price} />
          </View>

          <View style={styles.row}>
            <Text style={styles.price}>{formatCurrencyVietnam(data?.price)}</Text>
            <Text style={styles.voucher}>Mua để nhận quà</Text>
          </View>
          <Text style={styles.originPrice}>{formatCurrencyVietnam(data?.original_price)}</Text>

          <View
            style={[
              styles.row,
              { justifyContent: "space-between", alignItems: "center", marginTop: 10 },
            ]}
          >
            <Text>Đã bán {formatSellNumber(data?.sell_number)}</Text>
            <View style={{ flexDirection: "row" }}>
              <MyCustomIcon
                {...ICON_HEART(isHeart)}
                handlePress={() => setIsHeart(!isHeart)}
                color={isHeart ? COLORS.primary : COLORS.text}
              />
              <MyCustomIcon
                {...ICON_MESSAGE}
                handlePress={() => navigation.navigate(ROUTES.message)}
                color={COLORS.text}
              />
            </View>
          </View>
        </View>

        {data?.relative?.length > 0 && (
          <View style={[styles.container, { padding: 10 }]}>
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
              style={{ marginTop: 20, marginBottom: 200 }}
            >
              {data?.relative?.map((item, index) => (
                <Card key={`card-${index}`} product={item} border />
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>

      <BottomAction />
      {/* <MyCustomSheet item={item} /> */}
    </FontWrapper>
  );
};

export default ProductScreen;
