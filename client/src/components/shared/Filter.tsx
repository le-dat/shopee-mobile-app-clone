import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { COLORS, ICON_RANGE, ICON_SORT } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { resetQueries, setQueries } from "../../redux/reducers/querySlice";
import { Icon } from "@rneui/themed";

interface TabIProps {
  title: string;
  query: "name" | "createdAt" | "sell_number" | "price";
  value: string;
  icon?: any;
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
      icon: price === undefined ? ICON_RANGE : ICON_SORT(price === "asc"),
    },
  ];

  const handlePress = (index: number, tab: TabIProps) => {
    setActive(index);
    dispatch(resetQueries());
    dispatch(
      setQueries({
        name,
        [tab.query]: tab.value,
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      {TABS.map((tab, index) => {
        const isActive = index === active;

        return (
          <TouchableWithoutFeedback key={`tab-${index}`} onPress={() => handlePress(index, tab)}>
            <View style={styles.tab(isActive)}>
              <Text style={styles.title(isActive)}>{tab.title}</Text>
              {tab?.icon && (
                <Icon
                  {...tab?.icon}
                  size={15}
                  color={isActive ? COLORS.primary : COLORS.grayDark}
                />
              )}
              <View style={styles.border} />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
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
