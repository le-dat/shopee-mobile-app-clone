import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { Button, Divider, Menu } from "native-base";
import React from "react";

import { COLORS, ICON_DOTS_THREE_VERTICAL, ROUTES } from "../../../constants";
import { Animated, StyleSheet } from "react-native";

interface IProps {
  color?: string;
  rounded?: boolean;
  style?: any;
}
const ButtonThreeDot: React.FC<IProps> = ({ color = COLORS.white, rounded, style }) => {
  const navigation = useNavigation<any>();

  const handleNavigateToHome = () => {
    navigation.navigate(ROUTES.home);
  };

  return (
    <Animated.View style={style}>
      <Menu
        placement="bottom right"
        trigger={(triggerProps) => {
          return (
            <Button
              alignSelf="center"
              variant="link"
              {...triggerProps}
              style={styles.button(rounded)}
            >
              <Icon {...ICON_DOTS_THREE_VERTICAL} color={color} size={14} />
            </Button>
          );
        }}
      >
        <Menu.Item onPress={handleNavigateToHome}>Trở về trang chủ</Menu.Item>
        <Divider my="1" w="100%" />
        <Menu.Item>Tố cáo sản phẩm này</Menu.Item>
        <Divider my="1" w="100%" />
        <Menu.Item>Ban cần giúp đỡ?</Menu.Item>
      </Menu>
    </Animated.View>
  );
};

const styles = StyleSheet.create<any>({
  button: (rounded: boolean) => ({
    padding: 0,
    backgroundColor: rounded ? COLORS.grayDark : "transparent",
    borderRadius: rounded ? 50 : 0,
    marginHorizontal: 5,
  }),
});

export default ButtonThreeDot;
