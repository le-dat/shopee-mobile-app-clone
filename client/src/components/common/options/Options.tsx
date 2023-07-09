import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { SharedIProps } from "../../../types/product";
import styles from "./options.style";

interface IProps {
  title: string;
  data: SharedIProps[];
  value: string;
  setValue: (value: string) => void;
}
const Options: React.FC<IProps> = ({ title, data, value, setValue }) => {
  const handleSelect = (item: SharedIProps) => {
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

export default Options;
