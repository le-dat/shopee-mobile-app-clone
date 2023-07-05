import React from "react";
import { ScrollView, Text, View } from "react-native";

import FontWrapper from "../../components/wrapper/FontWrapper";
import CartItem from "../../components/common/cartitem/CartItem";

const CartScreen: React.FC = () => {
  return (
    <FontWrapper>
      <ScrollView scrollEventThrottle={16}>
        <View>
          <Text>CartScreen</Text>
          {/* <CartItem/> */}
        </View>
      </ScrollView>
    </FontWrapper>
  );
};

export default CartScreen;
