import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import BottomWrapper from "../../../components/wrapper/BottomWrapper";
import { COLORS, ICON_CART, ICON_MESSAGE, ROUTES } from "../../../constants";
import { ProductIProps } from "../../../types/product";
import SheetAddProduct from "./SheetAddProduct";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  product: ProductIProps;
}
const BottomAction: React.FC<IProps> = ({ product }) => {
  const navigation = useNavigation<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMessage = () => {
    navigation.navigate(ROUTES.message);
  };

  const handleOpenSheet = () => {
    setIsOpen(true);
  };
  const handleCloseSheet = () => {
    setIsOpen(false);
  };

  return (
    <BottomWrapper style={styles.wrapper}>
      <TouchableOpacity style={[styles.button, styles.buttonCart]} onPress={handleMessage}>
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
    </BottomWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    backgroundColor: COLORS.green,
  },
  divide: {
    width: 1,
    height: "60%",
    backgroundColor: COLORS.text,
  },
  button: {
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCart: {
    color: COLORS.white,
    backgroundColor: COLORS.green,
  },
  text: {
    fontSize: 10,
    color: COLORS.white,
  },
  buttonPayment: {
    flex: 1,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
});

export default BottomAction;
