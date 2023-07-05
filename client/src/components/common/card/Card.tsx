import React from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { useLinkTo } from "@react-navigation/native";
import { LINKS } from "../../../constants";
import { ItemIProps } from "../../../types/data";
import Sell from "../sell/Sell";
import styles from "./card.style";
import FastImage from "react-native-fast-image";

interface IProps {
  id?: string;
  item?: ItemIProps;
  border?: boolean;
  style?: StyleProp<ViewStyle>;
}
const Card: React.FC<IProps> = ({ id = "", item, border, style }) => {
  const linkTo = useLinkTo();

  return (
    <TouchableOpacity onPress={() => linkTo(LINKS.item(id))} style={[styles.wrapper, style]}>
      <View style={styles.productItem(border)}>
        <View style={styles.productSell}>
          <Sell />
        </View>
        <View style={styles.productItemImageWrapper}>
          {/* <FastImage
            source={require(item?.thumbnail?.data?.[0]?.attributes?.url || "")}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.productItemImage}
            accessibilityLabel={`category-${id}`}
          /> */}
        </View>

        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text numberOfLines={2} style={styles.productItemText}>
            asfsadf
            {item?.name}
          </Text>

          <View style={styles.productItemBottom}>
            <Text numberOfLines={1} style={styles.productItemPrice}>
              {item?.price}asdf
            </Text>
            <Text numberOfLines={1} style={styles.productItemSellNumber}>
              {item?.sell_number}asdf
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
