import { useLinkTo } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";

import MyCustomIcon from "../../components/common/MyCustomIcon";
import Search from "../../components/common/Search";
import ItemCarousel from "../../components/common/carousel/ItemCarousel";
import Sell from "../../components/common/sell/Sell";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import {
  COLORS,
  ICON_BACK,
  ICON_CART,
  ICON_DOTS_THREE_VERTICAL,
  ICON_HEART,
  ICON_MESSAGE,
  ICON_SHARE,
  LINKS,
  LIST_MENU,
  LIST_ITEM_BEAUTIFUL,
} from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import styles from "./itemscreen.style";
import Card from "../../components/common/card/Card";

interface IProps {
  navigation: StackNavigationProp<any, any>;
}
const ItemScreen: React.FC<IProps> = ({ navigation }) => {
  const linkTo = useLinkTo();
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const { isScroll, handleScroll } = useIsScroll();

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <MyCustomIcon {...ICON_BACK} handlePress={() => navigation.goBack()} />

        <Search />
        <View style={{ flexDirection: "row" }}>
          <MyCustomIcon {...ICON_SHARE} handlePress={() => console.log("ICON_SHARE")} />
          <MyCustomIcon {...ICON_CART} handlePress={() => linkTo(LINKS.cart)} />
          <MyCustomIcon
            {...ICON_DOTS_THREE_VERTICAL}
            handlePress={() => console.log("ICON_DOTS_THREE_VERTICAL")}
          />
        </View>
      </HeaderWrapper>

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ backgroundColor: COLORS.bgPrimary }}
      >
        <ItemCarousel />
        <View style={styles.container}>
          <View style={[styles.row]}>
            <Text numberOfLines={2} style={styles.title}>
              Kính mát WE flower Kính mát WE flowerKính mát WE flowerKính mát WE flowerKính mát WE
              flowerKính mát WE flowerKính mát WE flower
            </Text>
            <Sell />
          </View>

          <View style={styles.row}>
            <Text style={styles.price}>10.000</Text>
            <Text style={styles.voucher}>Mua để nhận quà</Text>
          </View>
          <Text style={styles.originPrice}>16.000</Text>

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
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Text style={{ color: COLORS.primary }}>Xem tất cả</Text>
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20, marginBottom: 150 }}
          >
            {LIST_ITEM_BEAUTIFUL.map(
              (item, index) => index < 10 && <Card key={index} item={item} border />
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </FontWrapper>
  );
};

export default ItemScreen;
