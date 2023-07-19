import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { Tab, TabView } from "@rneui/themed";
import Error from "../../components/shared/Error";
import MyCustomImage from "../../components/shared/MyCustomImage";
import SearchUI from "../../components/shared/SearchUI";
import ButtonBack from "../../components/shared/buttons/ButtonBack";
import ButtonThreeDot from "../../components/shared/buttons/ButtonThreeDot";
import ListCardVertical from "../../components/shared/card/ListCardVertical";
import FontWrapper from "../../components/wrapper/FontWrapper";
import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import ScrollRefreshWrapper from "../../components/wrapper/ScrollRefreshWrapper";
import { COLORS } from "../../constants";
import getCategoryById from "../../services/category/getCategoryById";

interface RouteParams {
  id: string;
}
interface LayoutIProps {
  children: React.ReactNode;
}

const CategoryScreen: React.FC = () => {
  const router = useRoute();
  const [index, setIndex] = React.useState(0);
  const { id } = router.params as RouteParams;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleScroll = (e: any) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    animatedValue.setValue(offsetY);
  };

  const headerAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`category-${id}`],
    queryFn: () => getCategoryById(id),
  });

  if (isLoading) return <Spinner visible={isLoading} textContent={"Loading..."} />;
  if (!data || isError) return <Error handlePress={refetch} />;

  return (
    <FontWrapper style={styles.wrapper}>
      <HeaderWrapper>
        <ButtonBack />
        <SearchUI
          placeholder={`Tìm kiếm trong ${data?.name}...`}
          style={styles.input}
          styleText={styles.inputText}
        />
        <ButtonThreeDot />
      </HeaderWrapper>

      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <ScrollRefreshWrapper
        onScroll={(e) => handleScroll(e)}
        onRefresh={refetch}
        stickyHeaderIndices={[1]}
        style={{ backgroundColor: COLORS.secondary }}
      >
        {/* Header */}
        <Animated.View style={[headerAnimation, styles.category]}>
          <View style={styles.categoryImageWrapper}>
            <MyCustomImage url={data?.image} style={styles.categoryImage} />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryName}>{data?.name}</Text>
          </View>
          <View style={styles.categoryImageWrapper}>
            <MyCustomImage url={data?.image} style={styles.categoryImage} />
          </View>
        </Animated.View>

        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: COLORS.primary,
            height: 3,
          }}
          style={styles.tabs}
        >
          <Tab.Item title="Shop" titleStyle={(active) => styles.tabTitle(active)} />
          <Tab.Item title="Sản phẩm" titleStyle={(active) => styles.tabTitle(active)} />
          <Tab.Item title="Danh mục" titleStyle={(active) => styles.tabTitle(active)} />
        </Tab>

        <TabView
          value={index}
          onChange={setIndex}
          animationType="spring"
          containerStyle={{ minHeight: 1000, flex: 1, zIndex: 1 }}
        >
          <TabView.Item>
            <ListCardVertical products={data?.products} />
          </TabView.Item>
          <TabView.Item>
            <ListCardVertical products={data?.products} />
          </TabView.Item>
          <TabView.Item>
            <Text>Danh muc</Text>
          </TabView.Item>
        </TabView>
      </ScrollRefreshWrapper>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    backgroundColor: COLORS.secondary,
  },
  featureIcon: {
    position: "absolute",
    top: 0,
  },
  input: {
    backgroundColor: COLORS.gray,
  },
  inputText: {
    color: COLORS.text,
  },
  upperHeaderPlaceholder: {
    height: 80,
  },
  tabs: {
    backgroundColor: COLORS.white,
  },
  tabTitle: (active: boolean) => ({
    color: active ? COLORS.primary : COLORS.text,
  }),
  category: {
    padding: 14,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  categoryImageWrapper: {
    width: 50,
    height: 50,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  categoryInfo: {},
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
});

export default CategoryScreen;
