/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Routes />
          <StatusBar style="auto" />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
export default App;
