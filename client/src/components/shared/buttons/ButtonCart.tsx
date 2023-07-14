import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ICON_CART, ROUTES } from "../../../constants";
import { useAppSelector } from "../../../hooks/useRedux";
import MyCustomButton from "./MyCustomButton";

const ButtonCart: React.FC = () => {
  const products = useAppSelector((state) => state.cart.products);
  const navigation = useNavigation<any>();

  return (
    <MyCustomButton
      {...ICON_CART}
      badgeValue={products.length}
      handlePress={() => navigation.navigate(ROUTES.cart)}
    />
  );
};

export default ButtonCart;
