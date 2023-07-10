import { Divider } from "@rneui/themed";
import React, { useState } from "react";
import uuid from "react-native-uuid";

import { useAppDispatch } from "../../../hooks/useRedux";
import { addProduct } from "../../../redux/features/cartSlice";
import { handleOpenDialog } from "../../../redux/features/dialogSlice";
import { ProductIProps } from "../../../types/product";
import SheetWrapper from "../../wrapper/SheetWrapper";
import Options from "../options/Options";
import SheetButton from "./sheet-button/SheetButton";
import SheetQuantity from "./sheet-quantity/SheetQuantity";
import SheetTop from "./sheet-top/SheetTop";

interface IProps {
  isOpen: boolean;
  handleCloseSheet: () => void;
  product: ProductIProps;
}
const SheetAddProduct: React.FC<IProps> = ({ isOpen, handleCloseSheet, product }) => {
  const dispatch = useAppDispatch();

  const [size, setSize] = useState<string>(product?.sizes?.[0]?.name || "");
  const [color, setColor] = useState<string>(product?.colors?.[0]?.name || "");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddToCart = () => {
    setLoading(true);
    try {
      const productData = { ...product, uuid: uuid.v4(), color, size, quantity };
      dispatch(addProduct(productData));
      handleCloseSheet();
      dispatch(handleOpenDialog({ title: "Đã thêm vào giỏ", type: "SUCCESS" }));
    } catch (error) {
      dispatch(handleOpenDialog({ title: "Có lỗi", type: "ERROR" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <SheetWrapper isOpen={isOpen}>
      <SheetTop
        image={product?.images?.[0]}
        price={product?.price}
        handleCloseSheet={handleCloseSheet}
      />

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
      <SheetQuantity value={quantity} setValue={setQuantity} />

      <Divider style={{ marginVertical: 15 }} />
      <SheetButton title="Thêm vào giỏ hàng" isLoading={loading} handlePress={handleAddToCart} />
    </SheetWrapper>
  );
};

export default SheetAddProduct;
