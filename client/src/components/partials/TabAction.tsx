import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/themed";
import React from "react";

import {
  COLORS,
  ICON_HOME,
  ICON_LIVE,
  ICON_MAIL,
  ICON_NOTIFY,
  ICON_PERSONAL,
  TABS,
} from "../../constants";
import HomeScreen from "../../screens/home/HomeScreen";
import LiveScreen from "../../screens/live/LiveScreen";
import MailScreen from "../../screens/mail/MailScreen";
import NotifyScreen from "../../screens/notify/NotifyScreen";
import PersonScreen from "../../screens/personal/PersonalScreen";

const Tab = createMaterialBottomTabNavigator();

const TabAction: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={TABS.home}
      activeColor={COLORS.primary}
      inactiveColor={COLORS.text}
      barStyle={{ backgroundColor: COLORS.white }}
    >
      <Tab.Screen
        name={TABS.home}
        options={{
          tabBarColor: COLORS.white,
          tabBarIcon: ({ focused }) => (
            <Icon {...ICON_HOME(focused)} color={focused ? COLORS.primary : COLORS.text} />
          ),
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name={TABS.notify}
        options={{
          tabBarColor: COLORS.white,
          tabBarIcon: ({ focused }) => (
            <Icon {...ICON_NOTIFY(focused)} color={focused ? COLORS.primary : COLORS.text} />
          ),
        }}
        component={NotifyScreen}
      />
    </Tab.Navigator>
  );
};

export default TabAction;
