import React, { useState } from "react";
import { View } from "react-native";
import { ProductIProps } from "../../../types/product";
import { StyleSheet } from "react-native";

interface IProps {
  product: ProductIProps;
}
const BottomPayment: React.FC<IProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenSheet = () => {
    setIsOpen(true);
  };
  const handleCloseSheet = () => {
    setIsOpen(false);
  };

  return <View style={styles.wrapper}></View>;
};

const styles = StyleSheet.create<any>({});

export default BottomPayment;
