// import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./screens/DashboardScreen";
import Color from "./constants/color";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Dashboard /> */}
      {/* <LoginScreen /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" mode="modal">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, headerStyle: { backgroundColor: Color.primary }, headerTintColor: '#000' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
