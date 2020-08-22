import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/color";

type InputTypeProps = {
  style?: object;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export default (props: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderStyle: any = {
    borderColor: "#ced4da",
  };
  if (isFocused) {
    borderStyle.borderColor = Colors.primary;
    borderStyle.borderBottomWidth = 2;
  }
  if (props.isError) {
    borderStyle.borderColor = Colors.error;
    borderStyle.borderBottomWidth = 2;
  }
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...borderStyle, ...props.style }}
      onFocus={() => setIsFocused(true)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderColor: "#ced4da",
    borderRadius: 2,
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    marginVertical: 10,
  },
});
