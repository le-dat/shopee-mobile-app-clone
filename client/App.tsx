/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";
import Routes from "./src/routes";

const App: React.FC = () => {
  return (
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
  );
};
export default App;
