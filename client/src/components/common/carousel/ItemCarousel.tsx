import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { Image } from "react-native";
import { ImageIProps, ResponseArrayIProps } from "../../../types/data";
import styles from "./itemCarousel.style";

interface IProps {
  data: ResponseArrayIProps<ImageIProps>;
}
const ItemCarousel: React.FC<IProps> = ({ data }) => {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active < data?.data?.length - 1) {
        setActive(active + 1);
      } else {
        setActive(0);
      }
    }, 4200); // Set the timeout duration (in milliseconds)

    return () => {
      clearTimeout(timeout); // Clear the timeout when the component unmounts
    };
  }, [active, data]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: data?.data?.[active]?.attributes?.url }}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
        {data?.data?.map((item, index) => (
          <TouchableOpacity
            key={`image-${index}`}
            style={styles.categoryItem(active === index)}
            onPress={() => setActive(index)}
          >
            <Image
              source={{ uri: item?.attributes?.url }}
              resizeMode="contain"
              style={styles.categoryItemImage}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ItemCarousel;
