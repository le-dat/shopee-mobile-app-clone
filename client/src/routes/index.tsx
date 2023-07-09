import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import TabScreens from "../components/partials/TabNavigation";
import CartScreen from "../screens/cart/CartScreen";
import CategoryScreen from "../screens/category/CategoryScreen";
import ProductScreen from "../screens/item/ProductScreen";
import MessengerScreen from "../screens/message/MessengerScreen";

type RootStackParamList = {
  Main: undefined;
  Product: { id: string };
  Category: { id: string };
  Cart: undefined;
  Messenger: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabScreens} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: `Giỏ hàng ` }} />
      <Stack.Screen name="Messenger" component={MessengerScreen} options={{ title: "Tin nhắn" }} />
    </Stack.Navigator>
  );
};

export default Routes;
