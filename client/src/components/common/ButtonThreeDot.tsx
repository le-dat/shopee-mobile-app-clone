import { Button, Divider, Menu } from "native-base";
import React from "react";
import MyCustomIcon from "./icon/MyCustomIcon";
import { ICON_DOTS_THREE_VERTICAL } from "../../constants";

const ButtonThreeDot: React.FC = () => {
  return (
    <Menu
      placement="bottom right"
      trigger={(triggerProps) => {
        return (
          <Button alignSelf="center" variant="solid" {...triggerProps}>
            <MyCustomIcon
              {...ICON_DOTS_THREE_VERTICAL}
              handlePress={() => console.log("ICON_DOTS_THREE_VERTICAL")}
            />
          </Button>
        );
      }}
    >
      <Menu.Item>Trở về trang chủ</Menu.Item>
      <Divider mt="3" w="100%" />
      <Menu.Item>Tố cáo sản phẩm này</Menu.Item>
      <Divider mt="3" w="100%" />
      <Menu.Item>Ban cần giúp đỡ?</Menu.Item>
    </Menu>
  );
};

export default ButtonThreeDot;
