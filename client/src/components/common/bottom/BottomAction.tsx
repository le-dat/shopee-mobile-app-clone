import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS, ICON_CART, ICON_MESSAGE } from "../../../constants";
import { useAppDispatch } from "../../../hooks/useRedux";
import { handleOpenSheet } from "../../../redux/features/sheetSlice";
import MyCustomIcon from "../MyCustomIcon";
import styles from "./bottomaction.style";

const BottomAction: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.button, styles.buttonCart, styles.divide]}>
        <MyCustomIcon
          {...ICON_MESSAGE}
          handlePress={() => dispatch(handleOpenSheet())}
          color={COLORS.primary}
          style={{ padding: 0 }}
        />
        <Text style={styles.text}>Chat ngay</Text>
      </View>

      <View style={styles.divide} />

      <View style={[styles.button, styles.buttonCart]}>
        <MyCustomIcon
          {...ICON_CART}
          handlePress={() => dispatch(handleOpenSheet())}
          color={COLORS.primary}
          style={{ padding: 0 }}
        />
        <Text style={styles.text}>Thêm vào giỏ hàng</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.buttonPayment]}
        onPress={() => dispatch(handleOpenSheet())}
      >
        <Text style={{ color: COLORS.white }}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomAction;
