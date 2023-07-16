import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setQueries } from "../../redux/reducers/querySlice";

interface TabIProps {
  title: string;
  query: "name" | "createdAt" | "sell_number" | "price";
  value: string;
}

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, price } = useAppSelector((state) => state.query);
  const [active, setActive] = useState(0);

  const TABS: TabIProps[] = [
    {
      title: "Liên quan",
      query: "name",
      value: name,
    },
    {
      title: "Mới nhất",
      query: "createdAt",
      value: "desc",
    },
    {
      title: "Bán chạy",
      query: "sell_number",
      value: "desc",
    },
    {
      title: "Giá",
      query: "price",
      value: price === "asc" ? "desc" : "asc",
    },
  ];

  const handlePress = (index: number, tab: TabIProps) => {
    setActive(index);
    dispatch(
      setQueries({
        name,
        [tab.query]: tab.value,
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      {TABS.map((tab, index) => (
        <TouchableWithoutFeedback key={`tab-${index}`} onPress={() => handlePress(index, tab)}>
          <View style={styles.tab(index === active)}>
            <Text style={styles.title(index === active)}>{tab.title}</Text>
            <View style={styles.border} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  tab: (active: boolean) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: active ? COLORS.primary : COLORS.gray,
    position: "relative",
  }),
  title: (active: boolean) => ({
    textAlight: "center",
    fontSize: 14,
    color: active ? COLORS.primary : COLORS.grayDark,
    paddingVertical: 10,
  }),
  border: {
    position: "absolute",
    right: 0,
    width: 1,
    height: "60%",
    backgroundColor: COLORS.gray,
  },
});

export default Filter;
