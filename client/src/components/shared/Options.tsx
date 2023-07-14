import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants";
import { OptionIProps } from "../../types/product";

interface IProps {
  title: string;
  data: OptionIProps[];
  value: string;
  setValue: (value: string) => void;
}
const Options: React.FC<IProps> = ({ title, data, value, setValue }) => {
  const handleSelect = (item: OptionIProps) => {
    if (item?.enable) {
      setValue(item?.name);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.listOption}>
        {data?.map((item, index) => (
          <TouchableOpacity
            key={`option-${item.name}-${index}`}
            onPress={() => handleSelect(item)}
            style={styles.option(item.enable, value === item.name)}
          >
            <Text style={styles.name(value === item.name)}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    color: COLORS.text,
  },
  listOption: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  option: (enable: boolean, active: boolean) => ({
    padding: 5,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    opacity: enable ? 1 : 0.3,
    borderWidth: 1,
    borderColor: active ? COLORS.primary : "transparent",
    backgroundColor: active ? COLORS.white : COLORS.gray,
  }),
  name: (active: boolean) => ({
    color: active ? COLORS.primary : COLORS.text,
  }),
});

export default Options;
