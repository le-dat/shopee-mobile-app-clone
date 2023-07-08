import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { ProductIProps } from "../../../types/product";
import { formatCurrencyVietnam, formatSellNumber } from "../../../utils/common";
import MyCustomImage from "../MyCustomImage";
import Sell from "../sell/Sell";
import styles from "./card.style";
import { ROUTES } from "../../../constants";

interface IProps {
  product: ProductIProps;
  border?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<IProps> = ({ product, border, style }) => {
  const navigation = useNavigation<any>();

  const handleNavigateToItem = () => {
    navigation.navigate(ROUTES.product, { id: product?._id });
  };

  return (
    <TouchableOpacity onPress={() => handleNavigateToItem()} style={[styles.wrapper, style]}>
      <View style={styles.productWrapper(border)}>
        <View style={styles.productSell}>
          <Sell price={product?.price} originalPrice={product?.original_price} />
        </View>
        <View style={styles.productImageWrapper}>
          <MyCustomImage url={product?.images[0]} style={styles.productImage} />
        </View>

        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text numberOfLines={2} style={styles.productText}>
            {product?.name}
          </Text>

          <View style={styles.productBottom}>
            <Text numberOfLines={1} style={styles.productPrice}>
              {formatCurrencyVietnam(product?.price)}
            </Text>
            <Text numberOfLines={1} style={styles.productSellNumber}>
              {formatSellNumber(product?.sell_number)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
