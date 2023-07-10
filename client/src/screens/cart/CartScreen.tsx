import React from "react";
import { ScrollView, Text, View } from "react-native";

import CartItem from "../../components/shared/cart-item/CartItem";
import FontWrapper from "../../components/wrapper/FontWrapper";
import { useAppSelector } from "../../hooks/useRedux";
import styles from "./cartscreen.style";
import SwipeToDeleteItemWrapper from "../../components/wrapper/SwipeToDeleteItemWrapper";
import CartEmpty from "../../components/shared/cart-empty/CartEmpty";

const CartScreen: React.FC = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <FontWrapper>
      <ScrollView scrollEventThrottle={16} style={styles.wrapper}>
        <View style={styles.container}>
          {products.length > 0 ? (
            products.map((product) => (
              <SwipeToDeleteItemWrapper key={`product-${product._id}`} product={product}>
                <CartItem key={`product-${product._id}`} product={product} />
              </SwipeToDeleteItemWrapper>
            ))
          ) : (
            <CartEmpty />
          )}
        </View>
      </ScrollView>
    </FontWrapper>
  );
};

export default CartScreen;
