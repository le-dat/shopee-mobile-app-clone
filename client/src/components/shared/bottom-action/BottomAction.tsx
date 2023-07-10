import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@rneui/themed";
import { COLORS, ICON_CART, ICON_MESSAGE } from "../../../constants";
import { ProductIProps } from "../../../types/product";
import SheetAddProduct from "../../features/sheet/SheetAddProduct";
import styles from "./bottomaction.style";

interface IProps {
  product: ProductIProps;
}
const BottomAction: React.FC<IProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenSheet = () => {
    setIsOpen(true);
  };
  const handleCloseSheet = () => {
    setIsOpen(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.button, styles.buttonCart]} onPress={handleOpenSheet}>
        <Icon {...ICON_MESSAGE} color={COLORS.white} style={{ padding: 0 }} />
        <Text style={styles.text}>Chat ngay</Text>
      </TouchableOpacity>

      <View style={styles.divide} />

      <TouchableOpacity style={[styles.button, styles.buttonCart]} onPress={handleOpenSheet}>
        <Icon {...ICON_CART} color={COLORS.white} style={{ padding: 0 }} />
        <Text style={styles.text}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonPayment]} onPress={handleOpenSheet}>
        <Text style={{ color: COLORS.white }}>Mua ngay</Text>
      </TouchableOpacity>

      <SheetAddProduct product={product} isOpen={isOpen} handleCloseSheet={handleCloseSheet} />
    </View>
  );
};

export default BottomAction;
