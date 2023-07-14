import { View } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { COLORS, FONTS, ICON_CLOSE } from "../../../constants";
import { formatCurrencyVietnam } from "../../../utils/common";
import MyCustomButton from "../buttons/MyCustomButton";
import MyCustomImage from "../MyCustomImage";

interface IProps {
  image: string;
  price: number;
  handleCloseSheet: () => void;
}

const SheetTop: React.FC<IProps> = ({ image, price, handleCloseSheet }) => {
  return (
    <View style={styles.top}>
      <View style={styles.topLeft}>
        <MyCustomImage url={image} style={styles.topImage} />
      </View>
      <View style={styles.topCenter}>
        <Text style={styles.price}>{formatCurrencyVietnam(price)}</Text>
      </View>

      <View style={styles.topRight}>
        <MyCustomButton
          {...ICON_CLOSE}
          color={COLORS.text}
          handlePress={handleCloseSheet}
          size={30}
          style={styles.iconClose}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  top: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 15,
  },
  topLeft: {
    width: 150,
    height: 150,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  topImage: {
    aspectRatio: 1,
    width: "100%",
    height: "100%",
  },
  topCenter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  price: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  topRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  iconClose: {},
});

export default SheetTop;
