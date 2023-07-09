import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS, ICON_CART, ICON_MESSAGE } from "../../../constants";
import { useAppDispatch } from "../../../hooks/useRedux";
import { openSheet } from "../../../redux/features/sheetSlice";
import MyCustomIcon from "../icon/MyCustomIcon";
import styles from "./bottomaction.style";

const BottomAction: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOpenSheet = () => {
    dispatch(openSheet());
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.button, styles.buttonCart]} onPress={handleOpenSheet}>
        <MyCustomIcon {...ICON_MESSAGE} color={COLORS.white} style={{ padding: 0 }} />
        <Text style={styles.text}>Chat ngay</Text>
      </TouchableOpacity>

      <View style={styles.divide} />

      <TouchableOpacity style={[styles.button, styles.buttonCart]} onPress={handleOpenSheet}>
        <MyCustomIcon {...ICON_CART} color={COLORS.white} style={{ padding: 0 }} />
        <Text style={styles.text}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonPayment]} onPress={handleOpenSheet}>
        <Text style={{ color: COLORS.white }}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomAction;
