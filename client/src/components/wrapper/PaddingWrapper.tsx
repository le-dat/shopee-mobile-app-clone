import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import FontWrapper from "./FontWrapper";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const PaddingWrapper: React.FC<IProps> = ({ children, style }) => {
  const containerStyle = [style, { paddingHorizontal: 4 }];

  return (
    <View style={containerStyle}>
      <FontWrapper>{children}</FontWrapper>
    </View>
  );
};

export default PaddingWrapper;
