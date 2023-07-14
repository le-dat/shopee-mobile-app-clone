import React, { useState } from "react";

import MyCustomButton from "../../../components/shared/buttons/MyCustomButton";
import { COLORS, ICON_HEART } from "../../../constants";

const ButtonHeart: React.FC = () => {
  const [isHeart, setIsHeart] = useState<boolean>(false);

  const toggleHeart = () => {
    setIsHeart(!isHeart);
  };

  return (
    <MyCustomButton
      {...ICON_HEART(isHeart)}
      handlePress={toggleHeart}
      color={isHeart ? COLORS.primary : COLORS.text}
    />
  );
};

export default ButtonHeart;
