import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { COLORS, ICON_ARROW_DOWN, ROUTES } from "../../../constants";
import { useAppDispatch } from "../../../hooks/useRedux";
import { updateProduct } from "../../../redux/features/cartSlice";
import { ProductCartIProps } from "../../../types/store";
import { formatCurrencyVietnam } from "../../../utils/common";
import SheetUpdateProduct from "../../features/sheet/SheetUpdateProduct";
import SizeRange from "../../features/size-range/SizeRange";
import MyCustomImage from "../image/MyCustomImage";
import styles from "./cartitem.style";

interface IProps {
  product: ProductCartIProps;
  style?: StyleProp<ViewStyle>;
}
const CartItem: React.FC<IProps> = ({ product, style }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(product?.quantity || 1);

  const handleNavigateItemScreen = () => {
    navigation.navigate(ROUTES.product, { id: product?._id });
  };
  const handleOpenSheet = () => {
    setIsOpen(true);
  };
  const handleCloseSheet = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const productUpdate = { ...product, quantity };
    dispatch(updateProduct(productUpdate));
  }, [quantity]);

  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity style={styles.imageWrapper} onPress={handleNavigateItemScreen}>
        <MyCustomImage url={product?.images[0]} />
      </TouchableOpacity>

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
          {formatCurrencyVietnam(product?.price * product?.quantity)}
        </Text>

        <SizeRange value={quantity} setValue={setQuantity} />
      </View>
      <SheetUpdateProduct isOpen={isOpen} handleCloseSheet={handleCloseSheet} product={product} />
    </View>
  );
};

export default CartItem;
