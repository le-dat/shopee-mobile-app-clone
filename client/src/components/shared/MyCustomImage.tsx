import { Skeleton } from "@rneui/themed";
import React from "react";
import { Image, ImageProps, StyleProp } from "react-native";

import { StyleSheet } from "react-native";

interface IProps {
  url?: string;
  style?: StyleProp<ImageProps>;
}
const MyCustomImage: React.FC<IProps> = ({ url, style }) => {
  if (!url) return <Skeleton skeletonStyle={styles.wrapper} />;
  return <Image source={{ uri: url }} style={[styles.wrapper, style]} />;
};

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    height: "100%",
  },
});

export default MyCustomImage;
