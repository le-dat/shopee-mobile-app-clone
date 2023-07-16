import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import CartScreen from "../screens/cart/CartScreen";
import CategoryScreen from "../screens/category/CategoryScreen";
import MessengerScreen from "../screens/message/MessengerScreen";
import ProductScreen from "../screens/product/ProductScreen";
import SearchResultScreen from "../screens/search-result/SearchResultScreen";
import SearchScreen from "../screens/search/SearchScreen";
import TabNavigation from "./TabNavigation";

type RootStackParamList = {
  Main: undefined;
  Product: { id: string };
  Category: { id: string };
  Search: undefined;
  SearchResult: undefined;
  Cart: undefined;
  Messenger: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: `Giỏ hàng ` }} />
      <Stack.Screen name="Messenger" component={MessengerScreen} options={{ title: "Tin nhắn" }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
