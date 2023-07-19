import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  stickyHeaderIndices?: number[];
  onRefresh: () => void;
  onScroll?: (e: any) => void;
}

const ScrollRefreshWrapper: React.FC<IProps> = ({
  children,
  style,
  onRefresh,
  onScroll,
  stickyHeaderIndices,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    onRefresh();
    setRefreshing(false);
  }, []);

  return stickyHeaderIndices ? (
    <ScrollView
      stickyHeaderIndices={stickyHeaderIndices}
      onScroll={onScroll}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />} // scroll event refresh
      scrollEventThrottle={16}
      style={style}
    >
      {children}
    </ScrollView>
  ) : (
    <ScrollView
      onScroll={onScroll}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />} // scroll event refresh
      scrollEventThrottle={16}
      style={style}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollRefreshWrapper;
