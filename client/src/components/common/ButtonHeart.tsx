import React, { useState } from "react";

import { COLORS, ICON_HEART } from "../../constants";
import MyCustomIcon from "./icon/MyCustomIcon";

const ButtonHeart: React.FC = () => {
  const [isHeart, setIsHeart] = useState<boolean>(false);

  const toggleHeart = () => {
    setIsHeart(!isHeart);
  };

  return (
    <MyCustomIcon
      {...ICON_HEART(isHeart)}
      handlePress={toggleHeart}
      color={isHeart ? COLORS.primary : COLORS.text}
    />
  );
};

export default ButtonHeart;
