import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { DataIProps } from "../../../types/common";
import styles from "./twocolumnscreen.style";

interface IProps {
  data: DataIProps[];
}
const TwoRowScrollView: React.FC<IProps> = ({ data }) => {
  const renderItem = (item: DataIProps, index: number) => {
    return (
      <View key={index} style={styles.categoryItem}>
        {/* <Image
          source={require(item.image)}
          resizeMode="contain"
          style={styles.categoryItemImage}
          accessibilityLabel={`category-${item.id}`}
        /> */}
        <Text style={styles.categoryItemText}>{item.name}</Text>
      </View>
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
