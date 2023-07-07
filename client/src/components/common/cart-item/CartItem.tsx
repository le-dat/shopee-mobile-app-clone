import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { ProductIProps } from "../../../types/product";
import { formatCurrencyVietnam } from "../../../utils/common";
import styles from "./cartitem.style";

interface IProps {
  id: number;
  item: ProductIProps;
  style?: StyleProp<ViewStyle>;
}
const CartItem: React.FC<IProps> = ({ id, item, style }) => {
  const navigation = useNavigation<any>();

  const store = [2, 3, 4, 5];

  const handleNavigateToItem = () => {
    // navigation.navigate("Category", { slug: category?.slug });
  };

  return (
    <TouchableOpacity onPress={() => handleNavigateToItem()} style={[styles.wrapper, style]}>
      <View>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: item?.images[0] }}
            resizeMode="contain"
            style={styles.image}
            accessibilityLabel={`category-${id}`}
          />
        </View>

        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text numberOfLines={1} style={styles.productItemText}>
            {item?.name}
          </Text>

          <View style={styles.productItemBottom}>
            <Text numberOfLines={1} style={styles.productItemPrice}>
              {formatCurrencyVietnam(item?.price)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
