import { Divider } from "@rneui/themed";
import React, { useState } from "react";

import Options from "../../../components/shared/Options";
import SheetButton from "../../../components/shared/sheet/SheetButton";
import SheetQuantity from "../../../components/shared/sheet/SheetQuantity";
import SheetTop from "../../../components/shared/sheet/SheetTop";
import SheetWrapper from "../../../components/wrapper/SheetWrapper";
import { useAppDispatch } from "../../../hooks/useRedux";
import { updateProduct } from "../../../redux/reducers/cartSlice";
import { openDialog } from "../../../redux/reducers/dialogSlice";
import { ProductCartIProps } from "../../../types/store";

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
      <SheetButton title="Xác nhận" isLoading={loading} handlePress={handleUpdate} />
    </SheetWrapper>
  );
};

export default SheetUpdateProduct;
