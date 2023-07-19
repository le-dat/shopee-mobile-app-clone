/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import MyCustomDialog from "./src/components/shared/MyCustomDialog";
import { store } from "./src/redux/store";
import Routes from "./src/routes";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NativeBaseProvider>
            <NavigationContainer>
              <SafeAreaProvider style={{ flex: 1 }}>
                <StatusBar style="auto" />
                <Routes />
                <MyCustomDialog />
              </SafeAreaProvider>
            </NavigationContainer>
          </NativeBaseProvider>
        </GestureHandlerRootView>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
