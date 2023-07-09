import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { StyleProp, View } from "react-native";

SplashScreen.preventAutoHideAsync();

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const FontWrapper: React.FC<IProps> = ({ children, style }) => {
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
    <View onLayout={onLayoutRootView} style={[styles.wrapper, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    position: "relative",
    flex: 1,
  },
});

export default FontWrapper;
