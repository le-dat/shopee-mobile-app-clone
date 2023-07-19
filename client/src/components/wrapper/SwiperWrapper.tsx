import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Swiper from "react-native-swiper";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const SwiperWrapper: React.FC<IProps> = ({ children, style }) => {
  return (
    <Swiper autoplay showsButtons={true} style={[styles.wrapper, style]}>
      {children}
    </Swiper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    height: 220,
  },
});

export default SwiperWrapper;
