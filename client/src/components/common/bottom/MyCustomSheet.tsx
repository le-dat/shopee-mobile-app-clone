import { BottomSheet, ListItem } from "@rneui/themed";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { handleCloseSheet } from "../../../redux/features/sheetSlice";
import { ProductIProps } from "../../../types/product";
import { COLORS } from "../../../constants";

interface IProps {
  item: ProductIProps;
}
const MyCustomSheet: React.FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.sheet);
  const [size, setSize] = React.useState<string>("");

  // const list = [
  //   { title: "List Item 1" },
  //   { title: "List Item 2" },
  //   {
  //     title: "Cancel",
  //     containerStyle: { backgroundColor: "red" },
  //     titleStyle: { color: "white" },
  //     onPress: () => dispatch(handleCloseSheet()),
  //   },
  // ];

  return (
    <View>
      <BottomSheet modalProps={{}} isVisible={isOpen}>
        {/* {item?.size?.map((it, index) => (
          <TouchableOpacity onPress={() => set} key={index} style={{ backgroundColor: it.enable ? COLORS.gray : COLORS.white }}>
            <Text>{it.name}</Text>
          </TouchOpac>
        ))} */}
        {/* {item?.size?.map((item, index) => (
          <ListItem key={index} containerStyle={item.containerStyle} onPress={item.onPress}>
            <ListItem.Content>
              <ListItem.Title style={item.titleStyle}>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))} */}
      </BottomSheet>
    </View>
  );
};

export default MyCustomSheet;
