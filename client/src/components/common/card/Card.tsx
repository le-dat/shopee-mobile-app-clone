import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { ItemIProps } from "../../../types/data";
import { formatCurrencyVietnam } from "../../../utils/common";
import Sell from "../sell/Sell";
import styles from "./card.style";
import MyCustomImage from "../MyCustomImage";

interface IProps {
  item: ItemIProps;
  border?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<IProps> = ({ item, border, style }) => {
  const navigation = useNavigation<any>();

  const handleNavigateToItem = () => {
    navigation.navigate("Item", { slug: item?.slug });
  };

  return (
    <TouchableOpacity onPress={() => handleNavigateToItem()} style={[styles.wrapper, style]}>
      <View style={styles.productItem(border)}>
        <View style={styles.productSell}>
          <Sell price={item?.price} originalPrice={item?.original_price} />
        </View>
        <View style={styles.productItemImageWrapper}>
          <MyCustomImage
            url={item?.thumbnail?.data?.attributes?.url}
            style={styles.productItemImage}
          />
          {/* <Image
            source={{ uri: item?.thumbnail?.data?.attributes?.url }}
            style={styles.productItemImage}
          /> */}
        </View>

        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text numberOfLines={1} style={styles.productItemText}>
            {item?.name}
          </Text>

          <View style={styles.productItemBottom}>
            <Text numberOfLines={1} style={styles.productItemPrice}>
              {formatCurrencyVietnam(item?.price)}
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
