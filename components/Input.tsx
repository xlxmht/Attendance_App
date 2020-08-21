import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type InputTypeProps = {
  style?: object;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export default (props: InputTypeProps) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#ced4da",
    borderRadius: 2,
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    marginVertical: 10,
  },
});
