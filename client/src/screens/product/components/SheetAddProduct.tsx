import { Divider } from "@rneui/themed";
import React, { useState } from "react";
import uuid from "react-native-uuid";

import { useAppDispatch } from "../../../hooks/useRedux";
import { addProduct } from "../../../redux/reducers/cartSlice";
import { openDialog } from "../../../redux/reducers/dialogSlice";
import { ProductIProps } from "../../../types/product";
import SheetWrapper from "../../../components/wrapper/SheetWrapper";
import SheetTop from "../../../components/shared/sheet/SheetTop";
import Options from "../../../components/shared/Options";
import SheetQuantity from "../../../components/shared/sheet/SheetQuantity";
import SheetButton from "../../../components/shared/sheet/SheetButton";

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
      const productData = { ...product, uuid: uuid.v4(), color, size, quantity, isChecked: false };
      dispatch(addProduct(productData));
      handleCloseSheet();
      dispatch(openDialog({ title: "Đã thêm vào giỏ", type: "SUCCESS" }));
    } catch (error) {
      dispatch(openDialog({ title: "Có lỗi", type: "ERROR" }));
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
