import React, { useState } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { COLORS, ICON_ARROW_DOWN, ROUTES } from "../../../constants";
import { useAppDispatch } from "../../../hooks/useRedux";
import { openSheet } from "../../../redux/features/sheetSlice";
import { ProductCartIProps } from "../../../types/store";
import { formatCurrencyVietnam } from "../../../utils/common";
import MyCustomSheet from "../bottom-sheet/MyCustomSheet";
import MyCustomImage from "../image/MyCustomImage";
import SizeRange from "../size-range/SizeRange";
import styles from "./cartitem.style";

interface IProps {
  product: ProductCartIProps;
  style?: StyleProp<ViewStyle>;
}
const CartItem: React.FC<IProps> = ({ product, style }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const [quantity, setQuantity] = useState<number>(1);

  const handleNavigateItemScreen = () => {
    navigation.navigate(ROUTES.product, { id: product?._id });
  };

  const handleOpenSheet = () => {
    dispatch(openSheet());
  };

  return (
    <TouchableOpacity onPress={handleNavigateItemScreen} style={[styles.wrapper, style]}>
      <View style={styles.imageWrapper}>
        <MyCustomImage url={product?.images[0]} />
      </View>

      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.title}>
          {product?.name}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleOpenSheet}>
          <Text numberOfLines={1}>
            Phân loại: {product?.color}, {product?.size}
          </Text>
          <Icon {...ICON_ARROW_DOWN} color={COLORS.text} size={20} />
        </TouchableOpacity>

        <Text numberOfLines={1} style={styles.price}>
          {formatCurrencyVietnam(product?.price)}
        </Text>

        <SizeRange value={quantity} setValue={setQuantity} />
      </View>
      <MyCustomSheet product={product} />
    </TouchableOpacity>
  );
};

export default CartItem;
