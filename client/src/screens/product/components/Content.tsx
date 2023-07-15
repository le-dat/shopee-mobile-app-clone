import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

import Sell from "../../../components/shared/Sell";
import MyCustomButton from "../../../components/shared/buttons/MyCustomButton";
import { COLORS, ICON_MESSAGE, ROUTES } from "../../../constants";
import { ProductIProps } from "../../../types/product";
import { formatCurrencyVietnam, formatSellNumber } from "../../../utils/common";
import ButtonHeart from "./ButtonHeart";
import styles from "./Content.style";

interface IProps {
  data: ProductIProps;
}
const Content: React.FC<IProps> = ({ data }) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.detail}>
      <View style={[styles.row]}>
        <Text numberOfLines={2} style={styles.title}>
          {data?.name}
        </Text>
        <Sell price={data?.price} originalPrice={data?.original_price} />
      </View>

      <View style={styles.row}>
        <Text style={styles.price}>{formatCurrencyVietnam(data?.price)}</Text>
        <Text style={styles.voucher}>Mua để nhận quà</Text>
      </View>
      <Text style={styles.originPrice}>{formatCurrencyVietnam(data?.original_price)}</Text>

      <View
        style={[
          styles.row,
          { justifyContent: "space-between", alignItems: "center", marginTop: 10 },
        ]}
      >
        <Text>Đã bán {formatSellNumber(data?.sell_number)}</Text>
        <View style={{ flexDirection: "row" }}>
          <ButtonHeart />
          <MyCustomButton
            {...ICON_MESSAGE}
            handlePress={() => navigation.navigate(ROUTES.message)}
            color={COLORS.text}
          />
        </View>
      </View>
    </View>
  );
};

export default Content;
