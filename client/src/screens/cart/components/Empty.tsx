import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import FontWrapper from "../../../components/wrapper/FontWrapper";
import { COLORS, FONTS, IMAGES } from "../../../constants";

const Empty: React.FC = () => {
  return (
    <FontWrapper style={styles.wrapper}>
      <Image source={IMAGES.empty} style={styles.image} />
      <Text style={styles.text}>Chưa có sản phẩm</Text>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    paddingHorizontal: 20,
    color: COLORS.text,
    textAlign: "center",
  },
});

export default Empty;
