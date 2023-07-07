import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

interface IProps {
  children: React.ReactNode;
}
const FontWrapper: React.FC<IProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={{ position: "relative" }}>
      {children}
    </View>
  );
};

export default FontWrapper;
