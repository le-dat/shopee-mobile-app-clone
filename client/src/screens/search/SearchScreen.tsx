import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import Search from "../../components/shared/search/Search";
import MyCustomIcon from "../../components/shared/icon/MyCustomIcon";
import FontWrapper from "../../components/wrapper/FontWrapper";
import { COLORS, ICON_BACK } from "../../constants";
import useIsScroll from "../../hooks/useIsScroll";
import styles from "./searchscreen.style";

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <FontWrapper>
      <View style={styles.wrapper}>
        <MyCustomIcon {...ICON_BACK} handlePress={() => navigation.goBack()} color={COLORS.text} />
        <Search />
      </View>
    </FontWrapper>
  );
};

export default SearchScreen;
