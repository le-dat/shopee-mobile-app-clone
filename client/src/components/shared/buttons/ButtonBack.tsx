import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ICON_BACK } from "../../../constants";
import MyCustomButton from "./MyCustomButton";

const ButtonBack: React.FC = () => {
  const navigation = useNavigation<any>();

  return <MyCustomButton {...ICON_BACK} handlePress={() => navigation.goBack()} />;
};

export default ButtonBack;
