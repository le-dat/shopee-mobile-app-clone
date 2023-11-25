import { useNavigation } from "@react-navigation/native";
import { CheckBox, Icon } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import MyCustomImage from "../../../components/shared/MyCustomImage";
import Quantity from "../../../components/shared/Quantity";
import { COLORS, FONTS, ICON_ARROW_DOWN, ROUTES } from "../../../constants";
import { useAppDispatch } from "../../../hooks/useRedux";
import { updateProduct } from "../../../redux/reducers/cartSlice";
import { ProductCartIProps } from "../../../types/store";
import { formatCurrencyVietnam } from "../../../utils/common";
import SheetUpdateProduct from "./SheetUpdateProduct";

interface IProps {
  product: ProductCartIProps;
  style?: StyleProp<ViewStyle>;
}
const Item: React.FC<IProps> = ({ product, style }) => {
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

  const toggleCheckbox = () => {
    const productUpdate = { ...product, isChecked: !product?.isChecked };
    dispatch(updateProduct(productUpdate));
  };

  useEffect(() => {
    const productUpdate = { ...product, quantity };
    dispatch(updateProduct(productUpdate));
  }, [quantity]);

  return (
    <View style={[styles.wrapper, style]}>
      <CheckBox
        checked={product?.isChecked}
        onPress={toggleCheckbox}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={"checkbox-blank-outline"}
        containerStyle={styles.checkbox}
      />

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

        <Quantity value={quantity} setValue={setQuantity} />
      </View>
      <SheetUpdateProduct isOpen={isOpen} handleCloseSheet={handleCloseSheet} product={product} />
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  checkbox: {
    margin: 0,
    padding: 0,
  },
  imageWrapper: {
    width: 100,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  title: {},
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: COLORS.gray,
  },
  price: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
});
export default Item;
