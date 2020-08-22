import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import Dashboard from "../screens/DashboardScreen";
import Colors from "../constants/color";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" mode="modal">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={options.loginScreen}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={options.dashboardScreen}
      />
    </Stack.Navigator>
  );
};

const options = {
  loginScreen: {
    headerShown: false,
  },
  dashboardScreen: {
    headerShown: false,
    headerStyle: { backgroundColor: Colors.primary },
    headerTintColor: "#000",
  },
};
