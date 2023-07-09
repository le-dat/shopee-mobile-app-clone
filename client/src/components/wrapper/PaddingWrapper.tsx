import { ScrollView } from "native-base";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import FontWrapper from "./FontWrapper";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const PaddingWrapper: React.FC<IProps> = ({ children, style }) => {
  const containerStyle = [style, { paddingHorizontal: 4 }];

  return (
    <ScrollView style={containerStyle}>
      <FontWrapper>{children}</FontWrapper>
    </ScrollView>
  );
};

export default PaddingWrapper;
