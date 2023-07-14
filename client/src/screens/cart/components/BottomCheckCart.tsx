import { CheckBox } from "@rneui/themed";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import BottomWrapper from "../../../components/wrapper/BottomWrapper";
import { COLORS } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { setIsCheckAll, toggleCheckAll } from "../../../redux/reducers/cartSlice";
import { ProductCartIProps } from "../../../types/store";
import { formatCurrencyVietnam } from "../../../utils/common";

interface IProps {
  products: ProductCartIProps[];
}
const BottomCheckCart: React.FC<IProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const isCheckAll = useAppSelector((state) => state.cart.isCheckAll);
  const check = products.every((product) => product?.isChecked);

  const getTotalPrice = (list: ProductCartIProps[]) => {
    const totalPrice = list.reduce((total, product) => {
      if (product?.isChecked) {
        return total + product?.price * product?.quantity;
      } else {
        return total;
      }
    }, 0);
    return totalPrice;
  };

  const handleCheckAll = () => {
    dispatch(toggleCheckAll(!isCheckAll));
  };

  const handlePayment = () => {
    console.log("payment");
  };

  useEffect(() => {
    dispatch(setIsCheckAll(check));
  }, [check]);

  return (
    <BottomWrapper style={styles.wrapper}>
      <View style={styles.checkAllWrapper}>
        <CheckBox
          checked={isCheckAll}
          onPress={handleCheckAll}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={"checkbox-blank-outline"}
          style={styles.checkAll}
        />
        <Text style={styles.checkAllText}>Tất cả</Text>
      </View>
      <View style={styles.totalWrapper}>
        <Text style={styles.totalText}>Tổng:</Text>
        <Text style={styles.totalPrice}>{formatCurrencyVietnam(getTotalPrice(products))}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Mua hàng ({products.length})</Text>
      </TouchableOpacity>
    </BottomWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    backgroundColor: COLORS.white,
  },
  checkAllWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkAll: {
    padding: 0,
  },
  checkAllText: {},
  totalWrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 3,
  },
  totalText: {},
  totalPrice: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  button: {
    height: "100%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BottomCheckCart;
