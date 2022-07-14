import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "./contants";
import { Ionicons } from "@expo/vector-icons";

const SearchBox = ({ onFocus = () => {}, handleSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.searchBox,
        { borderColor: isFocused ? COLORS.PRIMARY : "#141414" },
      ]}
    >
      <TextInput
        style={styles.input}
        placeholder="Search an Item"
        placeholderTextColor={COLORS.LABEL}
        autoCorrect={false}
        onChangeText={handleSearch}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
      />
      <Ionicons
        name="search"
        size={24}
        color={isFocused ? COLORS.PRIMARY : COLORS.LABEL}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    marginVertical: 10,
    height: 60,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
  },
  icon: {
    height: 24,
    width: 24,
  },
  input: {
    width: "80%",
    fontSize: 16,
    fontFamily: FONTS.H1,
  },
});

export default SearchBox;
