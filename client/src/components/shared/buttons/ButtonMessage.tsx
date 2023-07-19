import { useNavigation } from "@react-navigation/native";
import React from "react";

import { ICON_MESSAGE, ROUTES } from "../../../constants";
import MyCustomButton from "./MyCustomButton";

interface IProps {
  color?: string;
  rounded?: boolean;
  style?: any;
}
const ButtonMessage: React.FC<IProps> = ({ color, rounded, style }) => {
  const message = 0;
  const navigation = useNavigation<any>();

  return (
    <MyCustomButton
      {...ICON_MESSAGE}
      handlePress={() => navigation.navigate(ROUTES.message)}
      style={style}
      color={color}
      badgeValue={message}
      rounded={rounded}
    />
  );
};

export default ButtonMessage;
