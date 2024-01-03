import React, { useRef, useEffect } from "react";
import { PanResponder, Animated } from "react-native";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();
interface IProps {
  children: React.ReactNode;
  handleNext: () => void;
  handlePrev: () => void;
}
const SurfingWrapper: React.FC<IProps> = ({ children, handleNext, handlePrev }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }]),

    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -165) {
        // Khi vuốt sang trái đủ khoảng cách, thực hiện hành động tăng slide
        handleNext();
      } else if (gestureState.dx > 165) {
        // Khi vuốt sang phải đủ khoảng cách, thực hiện hành động lùi slide
        handlePrev();
      }
      Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default SurfingWrapper;
