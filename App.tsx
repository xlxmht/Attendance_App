// import { StatusBar } from "expo-status-bar";
import React from "react";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import MainNavigation from "./navigations/MainNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
