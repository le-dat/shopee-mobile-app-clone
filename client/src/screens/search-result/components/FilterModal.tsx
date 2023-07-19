import React, { useRef } from "react";
import { View, Animated, PanResponder, Dimensions } from "react-native";

const FilterModal = () => {
  const modalPosition = useRef(new Animated.Value(Dimensions.get("window").width)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          // Swiping left, reveal the modal
          modalPosition.setValue(gestureState.dx);
        } else {
          // Swiping right, hide the modal
          modalPosition.setValue(Dimensions.get("window").width + gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const threshold = -100;

        if (gestureState.dx < threshold) {
          // If swiped past the threshold to the left, animate modal to fully appear
          Animated.timing(modalPosition, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        } else {
          // If swiped past the threshold to the right, reset the modal position to hide it again
          Animated.timing(modalPosition, {
            toValue: Dimensions.get("window").width,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{ translateX: modalPosition }],
        position: "absolute",
        right: 0,
        top: 0,
      }}
      {...panResponder.panHandlers}
    >
      {/* Your modal content */}
    </Animated.View>
  );
};

export default FilterModal;
