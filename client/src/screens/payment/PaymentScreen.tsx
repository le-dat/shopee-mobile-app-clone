import { Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

import FontWrapper from "../../components/wrapper/FontWrapper";
import { COLORS } from "../../constants";

const PaymentScreen: React.FC = () => {
  return (
    <FontWrapper>
      <Text>PaymentScreen</Text>
    </FontWrapper>
  );
};

const styles = StyleSheet.create<any>({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    marginBottom: 80,
  },
  title: {
    flex: 1,
  },
  subTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {},
});
export default PaymentScreen;
