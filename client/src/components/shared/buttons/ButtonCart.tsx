import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ICON_CART, ROUTES } from "../../../constants";
import { useAppSelector } from "../../../hooks/useRedux";
import MyCustomButton from "./MyCustomButton";

interface IProps {
  color?: string;
  rounded?: boolean;
  style?: any;
}
const ButtonCart: React.FC<IProps> = ({ color, rounded, style }) => {
  const products = useAppSelector((state) => state.cart.products);
  const navigation = useNavigation<any>();

  return (
    <MyCustomButton
      {...ICON_CART}
      badgeValue={products.length}
      handlePress={() => navigation.navigate(ROUTES.cart)}
      color={color}
      style={style}
      rounded={rounded}
    />
  );
};

export default ButtonCart;
