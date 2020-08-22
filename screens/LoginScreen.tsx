import React from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableNativeFeedback,
} from "react-native";
import Input from "../components/Input";
import Color from "../constants/color";

export default (props: any) => {
  const handleClick = () => {
    // console.log("Clicked handler")
    props.navigation.navigate("Dashboard");
    return;

    fetch("http://localhost:2020/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "test",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((exp) => {
        console.error("ERROR: ", exp);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.loginContainer}>
        <Text style={{ alignSelf: "center", textAlign: 'center', fontSize: 48, fontWeight: "600", marginVertical: 50 }}>
          SAMVAD Login
        </Text>
        <View>
          <Input style={{ fontSize: 18 }} placeholder="Username" />
        </View>
        <View>
          <Input placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
          <View style={{ width: "50%" }}>
            <Button title="Login" color={Color.primary} onPress={handleClick} />
          </View>
        </View>
        <View style={styles.loader}>
          <ActivityIndicator color={Color.primary} animating={false}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    maxWidth: "80%",
    width: "100%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
  loader: {
    position: "relative",
    right: -95,
    bottom: 26,
    zIndex: 999999,
  },
});
