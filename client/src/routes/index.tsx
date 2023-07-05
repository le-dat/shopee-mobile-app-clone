import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import TabScreens from "../components/partials/TabNavigation";
import ItemScreen from "../screens/item/ItemScreen";
import CartScreen from "../screens/cart/CartScreen";
import MessengerScreen from "../screens/message/MessengerScreen";

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabScreens} options={{ headerShown: false }} />
      <Stack.Screen name="Item" component={ItemScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Messenger" component={MessengerScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
