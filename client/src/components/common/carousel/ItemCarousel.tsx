import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import styles from "./itemCarousel.style";

interface IProps {
  data?: any;
}
const ItemCarousel: React.FC<IProps> = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        {/* <Image
          source={require(LIST_MENU[0].image)}
          resizeMode="contain"
          accessibilityLabel={`swiper-${LIST_MENU[0].id}`}
        /> */}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
        {/* {LIST_MENU.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem(active === item.id)}
            onPress={() => setActive(item.id)}
          >
            <Image
              source={require(item.image)}
              style={styles.categoryItemImage}
              accessibilityLabel={`category-${item.id}`}
            />
          </TouchableOpacity>
        ))} */}
      </ScrollView>
    </View>
  );
};

export default ItemCarousel;
