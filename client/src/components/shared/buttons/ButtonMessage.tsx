import { useNavigation } from "@react-navigation/native";
import React from "react";

import { COLORS, ICON_MESSAGE, ROUTES } from "../../../constants";
import MyCustomButton from "./MyCustomButton";

const ButtonMessage: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <MyCustomButton {...ICON_MESSAGE} handlePress={() => navigation.navigate(ROUTES.message)} />
  );
};

export default ButtonMessage;
