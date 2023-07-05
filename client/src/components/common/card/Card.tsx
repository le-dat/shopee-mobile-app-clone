import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { LINKS } from "../../../constants";
import { ItemIProps } from "../../../types/data";
import Sell from "../sell/Sell";
import styles from "./card.style";

interface IProps {
  id: number;
  item: ItemIProps;
  border?: boolean;
  style?: StyleProp<ViewStyle>;
}
const Card: React.FC<IProps> = ({ id, item, border, style }) => {
  const linkTo = useLinkTo();

  return (
    <TouchableOpacity
      onPress={() => linkTo(LINKS.item(id.toString()))}
      style={[styles.wrapper, style]}
    >
      <View style={styles.productItem(border)}>
        <View style={styles.productSell}>
          <Sell price={item?.price} originalPrice={item?.original_price} />
        </View>
        <View style={styles.productItemImageWrapper}>
          <Image
            source={{ uri: item?.thumbnail?.data?.attributes?.url }}
            resizeMode="contain"
            style={styles.productItemImage}
            accessibilityLabel={`category-${id}`}
          />
        </View>

        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text numberOfLines={1} style={styles.productItemText}>
            {item?.name}
          </Text>

          <View style={styles.productItemBottom}>
            <Text numberOfLines={1} style={styles.productItemPrice}>
              {item?.price}
            </Text>
            <Text numberOfLines={1} style={styles.productItemSellNumber}>
              {item?.sell_number}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
