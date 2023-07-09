import { BottomSheet, Divider } from "@rneui/themed";
import { Button } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import uuid from "react-native-uuid";

import { COLORS, ICON_CLOSE } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { addProduct } from "../../../redux/features/cartSlice";
import { handleOpenDialog } from "../../../redux/features/dialogSlice";
import { closeSheet } from "../../../redux/features/sheetSlice";
import { formatCurrencyVietnam } from "../../../utils/common";
import MyCustomIcon from "../icon/MyCustomIcon";
import Options from "../options/Options";
import SizeRange from "../size-range/SizeRange";
import styles from "./mycustomsheet.style";
import { ProductIProps } from "../../../types/product";
import MyCustomImage from "../image/MyCustomImage";

interface IProps {
  product: ProductIProps;
}
const MyCustomSheet: React.FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.sheet);

  const [size, setSize] = useState<string>(product?.sizes?.[0]?.name || "");
  const [color, setColor] = useState<string>(product?.colors?.[0]?.name || "");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClose = () => {
    dispatch(closeSheet());
  };

  const handleAddToCart = () => {
    setLoading(true);
    try {
      const productData = { ...product, uuid: uuid.v4(), color, size, quantity };
      dispatch(addProduct(productData));
      dispatch(closeSheet());
      dispatch(handleOpenDialog({ title: "Đã thêm vào giỏ", type: "success" }));
    } catch (error) {
      dispatch(handleOpenDialog({ title: "Có lỗi", type: "error" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <BottomSheet modalProps={{}} isVisible={isOpen}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.topLeft}>
              <MyCustomImage url={product?.images?.[0]} style={styles.topImage} />
            </View>
            <View style={styles.topCenter}>
              <Text style={styles.price}>{formatCurrencyVietnam(product?.price)}</Text>
            </View>

            <View style={styles.topRight}>
              <MyCustomIcon
                {...ICON_CLOSE}
                color={COLORS.text}
                handlePress={handleClose}
                size={30}
                style={styles.iconClose}
              />
            </View>
          </View>

          {product?.colors && (
            <>
              <Divider style={{ marginVertical: 15 }} />
              <Options title="Màu sắc" data={product?.colors} value={color} setValue={setColor} />
            </>
          )}

          {product?.sizes && (
            <>
              <Divider style={{ marginVertical: 15 }} />
              <Options title="Kích cỡ" data={product?.sizes} value={size} setValue={setSize} />
            </>
          )}

          <Divider style={{ marginVertical: 15 }} />
          <View style={styles.range}>
            <Text style={styles.title}>Số lượng</Text>
            <SizeRange value={quantity} setValue={setQuantity} />
          </View>

          <Divider style={{ marginVertical: 15 }} />
          <View style={styles.buttonWrapper}>
            <Button disabled={loading} style={styles.button(loading)} onPress={handleAddToCart}>
              <Text style={styles.buttonText(loading)}>Thêm vào giỏ hàng</Text>
            </Button>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

export default MyCustomSheet;
