import { useState } from "react";

const useIsScroll = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y > 10;
    setIsScroll(offsetY);
  };
  return {
    isScroll,
    handleScroll,
  };
};

export default useIsScroll;
