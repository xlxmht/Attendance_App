import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Color from "../constants/color";

const data = [
  { id: 1, title: "Panchayat Level Review Planning Meeting" },
  { id: 2, title: "FGD" },
  { id: 3, title: "Motivation" },
  { id: 4, title: "Panchayat Level Motivation Camp" },
  { id: 5, title: "Flagship" },
  { id: 6, title: "Village Awareness Meeting" },
  { id: 7, title: "Women RIght" },
  { id: 8, title: "Monitoring Tool" }
];

const _renderGridItem = (gridItem: any) => {
  return (
    <TouchableOpacity style={styles.gridItem}>
      <View style={styles.container}>
        <Text style={styles.title}>{gridItem.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default (props: any) => {
  return (
    <FlatList
      data={data}
      renderItem={_renderGridItem}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1.5,
  },
  title: {
    fontWeight: "900",
    textAlign: 'center'
  },
});
