import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ROUTES } from "../../../constants";
import { CategoryIProps } from "../../../types/category";
import MyCustomImage from "../../../components/shared/MyCustomImage";

interface IProps {
  data: CategoryIProps[];
}
const TwoRowNav: React.FC<IProps> = ({ data }) => {
  const navigation = useNavigation<any>();

  const handleNavigateToItem = (id: string) => {
    navigation.navigate(ROUTES.category, { id });
  };

  const renderItem = (item: CategoryIProps, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.categoryItem}
        onPress={() => handleNavigateToItem(item?._id)}
      >
        <MyCustomImage url={item.image} style={styles.categoryItemImage} />
        <Text numberOfLines={2} style={styles.categoryItemText}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItems = () => {
    const items = [];

    for (let i = 0; i < data.length; i += 2) {
      const item1 = data[i];
      const item2 = data[i + 1];

      items.push(
        <View key={i} style={styles.column}>
          {item1 && renderItem(item1, i)}
          {item2 && renderItem(item2, i + 1)}
        </View>
      );
    }
    return items;
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {renderItems()}
    </ScrollView>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    flexDirection: "row",
    gap: 8,
    padding: 5,
  },
  column: {
    flexDirection: "column",
    gap: 10,
  },
  categoryItem: {
    width: 80,
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    height: 100,
  },
  categoryItemImage: {
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  categoryItemText: {
    textAlign: "center",
  },
});
export default TwoRowNav;
