import React from "react";
import { ScrollView, Text, View } from "react-native";

import FontWrapper from "../../components/wrapper/FontWrapper";

const MessengerScreen: React.FC = () => {
  return (
    <FontWrapper>
      <ScrollView scrollEventThrottle={16}>
        <View>
          <Text>MessengerScreen</Text>
        </View>
      </ScrollView>
    </FontWrapper>
  );
};

export default MessengerScreen;
