import React from "react";
import { ScrollView, Text, View } from "react-native";

import FontWrapper from "../../components/wrapper/FontWrapper";

const CartScreen: React.FC = () => {
  return (
    <FontWrapper>
      <ScrollView scrollEventThrottle={16}>
        <View>
          <Text>CartScreen</Text>
        </View>
      </ScrollView>
    </FontWrapper>
  );
};

export default CartScreen;
