import React from "react";
import { View, StyleSheet } from "react-native";
import DashboardHeader from "../components/DashboardHeader";
import GridTile from "../components/GridTile";

export default (props: any) => {
  return (
    <View style={styles.screen}>
      <DashboardHeader />
      <GridTile />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
