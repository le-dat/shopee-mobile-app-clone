import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "native-base";
import React from "react";
import { Image, Text, View } from "react-native";

import { useQuery } from "@tanstack/react-query";
import Spinner from "react-native-loading-spinner-overlay";
import Error from "../../components/common/error/Error";
import MyCustomIcon from "../../components/common/icon/MyCustomIcon";
import Search from "../../components/common/search/Search";
import Card from "../../components/common/card/Card";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import PaddingWrapper from "../../components/wrapper/PaddingWrapper";
import { COLORS, ICON_BACK, ICON_CART, ROUTES } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import getCategoryById from "../../services/category/getCategoryById";
import styles from "./categoryscreen.style";

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

interface RouteParams {
  id: string;
}

const CategoryScreen: React.FC<IProps> = ({ navigation }) => {
  const router = useRoute();
  const { id } = router.params as RouteParams;
  const { isScroll, handleScroll } = useIsScroll();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [`category-${id}`],
    queryFn: () => getCategoryById(id),
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (!data || error) return <Error handlePress={refetch} />;

  return (
    <FontWrapper>
      <HeaderWrapper isScroll={isScroll}>
        <MyCustomIcon {...ICON_BACK} handlePress={() => navigation.goBack()} />

        <Search placeholder="Tìm kiếm trong danh mục" />
        <View style={{ flexDirection: "row" }}>
          <MyCustomIcon {...ICON_CART} handlePress={() => navigation.navigate(ROUTES.cart)} />
          {/* <ButtonThreeDot /> */}
        </View>
      </HeaderWrapper>

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ backgroundColor: COLORS.gray }}
      >
        {/* introduce */}
        <View style={styles.category}>
          <View style={styles.categoryImageWrapper}>
            <Image source={{ uri: data?.image }} style={styles.categoryImage} />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryName}>{data?.name}</Text>
          </View>
          <View style={styles.categoryImageWrapper}>
            <Image source={{ uri: data?.image }} style={styles.categoryImage} />
          </View>
        </View>

        {/* items */}
        <PaddingWrapper style={{ marginBottom: 150 }}>
          <View style={styles.productList}>
            {data?.products?.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </View>
        </PaddingWrapper>
      </ScrollView>
    </FontWrapper>
  );
};

export default CategoryScreen;
