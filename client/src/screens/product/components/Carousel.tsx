import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { Text } from "react-native";
import MyCustomImage from "../../../components/shared/MyCustomImage";
import styles from "./Carousel.style";

interface IProps {
  data: string[];
}
const Carousel: React.FC<IProps> = ({ data }) => {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const checkIdx = active < data.length - 1;
      setActive(checkIdx ? active + 1 : 0);
    }, 4200);

    return () => clearTimeout(timeout);
  }, [active, data]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <MyCustomImage url={data?.[active]} style={styles.image} />
        <View style={styles.current}>
          <Text>
            {active + 1}/{data.length + 1}
          </Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
        {data?.map((item, index) => (
          <TouchableOpacity
            key={`image-${index}`}
            style={styles.categoryItem(active === index)}
            onPress={() => setActive(index)}
          >
            <MyCustomImage url={data?.[index]} style={styles.categoryItemImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Carousel;
