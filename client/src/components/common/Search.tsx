import { Input, Stack } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import {
  COLORS,
  ICON_SEARCH,
  LIST_ITEM_BEAUTIFUL,
  LIST_ITEM_BIKE,
  LIST_ITEM_FASHION_WOMAN,
  LIST_ITEM_HOME,
  LIST_ITEM_SHOE_MAN,
} from "../../constants";
import MyCustomIcon from "./MyCustomIcon";

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleSearch = (text: string) => {
    setValue(text);
  };

  function extractNumberFromString(str: string): number {
    const numberMatch: RegExpMatchArray | null = str.match(/\d+(\.\d+)?/);
    let number: string = numberMatch ? numberMatch[0] : "";

    // Remove commas from the number if present
    number = number.replace(/,/g, "");

    // Convert 'k' to thousands
    if (str.includes("k")) {
      number = number.replace("k", "");
      number = (parseFloat(number) * 1000).toString();
    }

    // Convert the extracted number to an integer
    const extractedNumber: number = parseInt(number);

    return extractedNumber;
  }

  function extractNumberFromString2(str: string): number {
    const numberMatch: RegExpMatchArray | null = str.match(/\d+(\.\d+)?/);
    let number: string = numberMatch ? numberMatch[0] : "";

    // Remove commas from the number if present
    number = number.replace(/,/g, "");
    number = (parseFloat(number) * 1000).toString();

    // Convert the extracted number to an integer
    const extractedNumber: number = parseInt(number);

    return extractedNumber;
  }

  const handleFixItem = () => {
    console.log("===================================");

    const newList = LIST_ITEM_SHOE_MAN.map((item, index) => {
      const indexFix = index + 501;

      return {
        ...item,
        id: indexFix,
        price: extractNumberFromString2(item.price),
        originPrice: extractNumberFromString2(item.originPrice) || 0,
        sellNumber: extractNumberFromString(item.sellNumber),
        image: item.image.replace(
          `../../assets/images_fashion_woman/1.jpg`,
          `../../assets/images_fashion_woman/image${index + 1}.jpg`
        ),
      };
    });
    console.log(newList);
  };
  return (
    <Stack style={styles.wrapper}>
      <Input
        size="md"
        variant="unstyled"
        value={value}
        onChangeText={handleSearch}
        leftElement={
          <MyCustomIcon
            {...ICON_SEARCH}
            // handlePress={() => console.log("ICON_SEARCH")}
            handlePress={() => handleFixItem()}
            color={COLORS.text}
            style={{ paddingLeft: 10, paddingRight: 0 }}
          />
        }
        placeholder="Random type..."
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 5,
  },
});

export default Search;
