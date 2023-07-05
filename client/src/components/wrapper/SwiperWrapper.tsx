import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Swiper from "react-native-swiper";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const SwiperWrapper: React.FC<IProps> = ({ children, style }) => {
  const containerStyle = [style, { height: 150 }];

  return (
    <Swiper autoplay showsButtons={true} style={containerStyle}>
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
