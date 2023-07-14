/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "./src/redux/store";
import Routes from "./src/routes";
import MyCustomDialog from "./src/components/shared/MyCustomDialog";
import { NavigationContainer } from "@react-navigation/native";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <SafeAreaProvider style={{ flex: 1 }}>
              <StatusBar style="auto" />
              <Routes />
              <MyCustomDialog />
            </SafeAreaProvider>
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
