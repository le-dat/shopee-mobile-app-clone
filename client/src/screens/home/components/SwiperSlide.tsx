import React from "react";
import { Image, StyleSheet } from "react-native";

import SwiperWrapper from "../../../components/wrapper/SwiperWrapper";
import { SliderIProps } from "../../../types/slider";

interface IProps {
  data: SliderIProps[];
}
const SwiperSlide: React.FC<IProps> = ({ data }) => {
  return (
    <SwiperWrapper>
      {data?.map((slider, index) => (
        <Image
          key={index}
          source={{ uri: slider?.image }}
          style={styles.item}
          accessibilityLabel={`slider-${index}`}
        />
      ))}
    </SwiperWrapper>
  );
};

const styles = StyleSheet.create<any>({
  item: {
    flex: 1,
  },
});
export default SwiperSlide;
