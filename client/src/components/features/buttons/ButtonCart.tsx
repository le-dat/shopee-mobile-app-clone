import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ICON_CART, ROUTES } from "../../../constants";
import MyCustomIcon from "../../shared/icon/MyCustomIcon";
import { useAppSelector } from "../../../hooks/useRedux";

const ButtonCart: React.FC = () => {
  const products = useAppSelector((state) => state.cart.products);
  const navigation = useNavigation<any>();

  return (
    <MyCustomIcon
      {...ICON_CART}
      badgeValue={products.length}
      handlePress={() => navigation.navigate(ROUTES.cart)}
    />
  );
};

export default ButtonCart;
