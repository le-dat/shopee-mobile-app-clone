import { Divider } from "@rneui/themed";
import React, { useState } from "react";

import { useAppDispatch } from "../../../hooks/useRedux";
import { updateProduct } from "../../../redux/features/cartSlice";
import { handleOpenDialog } from "../../../redux/features/dialogSlice";
import { ProductCartIProps } from "../../../types/store";
import SheetWrapper from "../../wrapper/SheetWrapper";
import Options from "../options/Options";
import SheetButton from "./sheet-button/SheetButton";
import SheetQuantity from "./sheet-quantity/SheetQuantity";
import SheetTop from "./sheet-top/SheetTop";

interface IProps {
  isOpen: boolean;
  handleCloseSheet: () => void;
  product: ProductCartIProps;
}
const SheetUpdateProduct: React.FC<IProps> = ({ isOpen, handleCloseSheet, product }) => {
  const dispatch = useAppDispatch();

  const [size, setSize] = useState<string>(product?.size || "");
  const [color, setColor] = useState<string>(product?.color || "");
  const [quantity, setQuantity] = useState<number>(product?.quantity || 1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpdate = () => {
    setLoading(true);
    try {
      const productData = { ...product, color, size, quantity };
      dispatch(updateProduct(productData));
      handleCloseSheet();
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
      <SheetButton title="Xác nhận" isLoading={loading} handlePress={handleUpdate} />
    </SheetWrapper>
  );
};

export default SheetUpdateProduct;
