import { Skeleton } from "@rneui/themed";
import React from "react";
import { Image, ImageProps, StyleProp } from "react-native";

import styles from "./mycustomimage.style";

interface IProps {
  url?: string;
  style?: StyleProp<ImageProps>;
}
const MyCustomImage: React.FC<IProps> = ({ url, style }) => {
  if (!url) return <Skeleton skeletonStyle={styles.wrapper} />;
  return <Image source={{ uri: url }} style={[styles.wrapper, style]} />;
};

export default MyCustomImage;
