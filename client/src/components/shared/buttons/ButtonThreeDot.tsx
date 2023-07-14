import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { Button, Divider, Menu } from "native-base";
import React from "react";

import { COLORS, ICON_DOTS_THREE_VERTICAL, ROUTES } from "../../../constants";

const ButtonThreeDot: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleNavigateToHome = () => {
    navigation.navigate(ROUTES.home);
  };

  return (
    <Menu
      placement="bottom right"
      trigger={(triggerProps) => {
        return (
          <Button alignSelf="center" variant="link" {...triggerProps}>
            <Icon {...ICON_DOTS_THREE_VERTICAL} color={COLORS.white} />
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
  );
};

export default ButtonThreeDot;
