import React from "react";
import { Image, Text } from "react-native";

import FontWrapper from "../../wrapper/FontWrapper";
import styles from "./cartempty.style";

interface IProps {
  text?: string;
}
const CartEmpty: React.FC<IProps> = ({ text = "Về trang chủ" }) => {
  return (
    <FontWrapper style={styles.wrapper}>
      <Image source={require("../../../assets/images/empty.png")} style={styles.image} />
      <Text style={styles.text}>Chưa có sản phẩm</Text>
    </FontWrapper>
  );
};

export default CartEmpty;
