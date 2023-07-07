import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CategoryIProps, ResponseArrayIProps } from "../../../types/data";
import styles from "./twocolumnscrollview.style";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";

const TwoRowScrollView: React.FC<ResponseArrayIProps<CategoryIProps>> = ({ data }) => {
  const navigation = useNavigation<any>();

  const handleNavigateToItem = (slug: string) => {
    navigation.navigate(ROUTES.cart, { slug });
  };

  const renderItem = (item: { attributes: CategoryIProps }, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.categoryItem}
        onPress={() => handleNavigateToItem(item?.attributes?.slug)}
      >
        <Image
          source={{ uri: item?.attributes?.image?.data?.attributes?.url }}
          resizeMode="contain"
          style={styles.categoryItemImage}
        />
        <Text style={styles.categoryItemText}>{item?.attributes?.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderItems = () => {
    const items = [];
    // example: data.length > 10
    const newData = [...data, ...data];

    for (let i = 0; i < newData.length; i += 2) {
      const item1 = newData[i];
      const item2 = newData[i + 1];

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
