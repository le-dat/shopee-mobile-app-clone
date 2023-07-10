import { View } from "native-base";
import React from "react";
import MyCustomImage from "../../../shared/image/MyCustomImage";
import styles from "./sheettop.style";
import { COLORS, ICON_CLOSE } from "../../../../constants";
import { useAppDispatch } from "../../../../hooks/useRedux";
import { closeSheet } from "../../../../redux/features/sheetSlice";
import { formatCurrencyVietnam } from "../../../../utils/common";
import { Text } from "react-native";
import MyCustomIcon from "../../../shared/icon/MyCustomIcon";

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
        <MyCustomIcon
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

export default SheetTop;
