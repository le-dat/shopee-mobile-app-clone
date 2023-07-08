import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { ROUTES } from "../../../constants";
import styles from "./twocolumnscrollview.style";
import { CategoryIProps } from "../../../types/category";

interface IProps {
  data: CategoryIProps[];
}
const TwoRowScrollView: React.FC<IProps> = ({ data }) => {
  const navigation = useNavigation<any>();

  const handleNavigateToItem = (slug: string) => {
    navigation.navigate(ROUTES.cart, { slug });
  };

  const renderItem = (item: CategoryIProps, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.categoryItem}
        onPress={() => handleNavigateToItem(item?.id)}
      >
        <Image source={{ uri: item.image }} resizeMode="contain" style={styles.categoryItemImage} />
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

export default TwoRowScrollView;
