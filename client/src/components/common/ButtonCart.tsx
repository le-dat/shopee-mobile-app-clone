import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ICON_CART, ROUTES } from "../../constants";
import MyCustomIcon from "./MyCustomIcon";

const ButtonCart: React.FC = () => {
  const value = 3;
  const navigation = useNavigation<any>();

  return (
    <MyCustomIcon
      {...ICON_CART}
      badgeValue={value}
      handlePress={() => navigation.navigate(ROUTES.cart)}
    />
  );
};

export default ButtonCart;
