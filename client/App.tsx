/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";
import Routes from "./src/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <SafeAreaProvider style={{ flex: 1 }}>
              <Routes />
              <StatusBar style="auto" />
            </SafeAreaProvider>
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
