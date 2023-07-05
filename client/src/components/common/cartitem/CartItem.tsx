import { useLinkTo, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { LINKS } from "../../../constants";
import { ItemIProps } from "../../../types/data";
import styles from "./cartitem.style";
import { formatCurrencyVietnam } from "../../../utils/common";
import useFetch from "../../../hooks/useFetch";

interface IProps {
  id: number;
  item: ItemIProps;
  style?: StyleProp<ViewStyle>;
}
const CartItem: React.FC<IProps> = ({ id, item, style }) => {
  const navigation = useNavigation<any>();

  const store = [2, 3, 4, 5];
  const query = store.map((id) => `&filters[id][$in][0]=${store[id]}`).join("");

  const {
    data: dataDetail,
    isLoading: isLoadingDetail,
    error: errorDetail,
    refetch: refetchDetail,
  } = useFetch({
    endpoint: `products?populate=*${query}`,
  });

  const handleNavigateToItem = () => {
    // navigation.navigate("Category", { slug: category?.slug });
  };

  return (
    <TouchableOpacity onPress={() => handleNavigateToItem()} style={[styles.wrapper, style]}>
      <View>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: item?.thumbnail?.data?.attributes?.url }}
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
