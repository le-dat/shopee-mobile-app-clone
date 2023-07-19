import React from "react";

import { ICON_SHARE } from "../../../constants";
import MyCustomButton from "./MyCustomButton";

interface IProps {
  color?: string;
  rounded?: boolean;
  style?: any;
}
const ButtonShare: React.FC<IProps> = ({ color, rounded, style }) => {
  const handlePress = () => {
    console.log("ICON_SHARE");
  };

  return (
    <MyCustomButton
      {...ICON_SHARE}
      handlePress={handlePress}
      color={color}
      style={style}
      rounded={rounded}
    />
  );
};

export default ButtonShare;
