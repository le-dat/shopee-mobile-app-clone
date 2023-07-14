import { useScrollToTop } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onRefresh: () => void;
  onScroll?: (e: any) => void;
}

const ScrollRefreshWrapper: React.FC<IProps> = ({ children, style, onRefresh, onScroll }) => {
  const ref = useRef(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  useScrollToTop(ref);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    onRefresh();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      ref={ref} // scroll to top
      // stickyHeaderIndices={[0]} // sticky header
      onScroll={onScroll} // scroll event hide header
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />} // scroll event refresh
      scrollEventThrottle={16}
      style={style}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollRefreshWrapper;
