import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants";

const Banner: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <Text style={styles.title}>Ví ShopeePay</Text>
        <Text style={styles.text}>Giảm 80.000 - Liên kết ví ShopeePay ngay</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>500 xu</Text>
        <Text style={styles.text}>Đổi xu lấy mã giảm giá</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  item: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: COLORS.gray,
  },
  title: {
    fontSize: 14,
    fontWeight: "medium",
  },
  text: {
    fontSize: 12,
  },
});
export default Banner;
