import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import NativeButton from '../components/NativeButton';
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Input from "../components/Input";
import Color from "../constants/color";
const URL = "http://192.168.43.90:2020/auth/login";

export default (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [userErrorMsg, setUserErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isTextFieldValid, setTextFieldValid] = useState(false);

  const handleSubmit = async () => {
    if (username === "" && password === "") {
      setTextFieldValid(true);
      setUserErrorMsg("Fields are required!");
      return;
    }
    Keyboard.dismiss();
    setLoading(true);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      console.log("RESPONSE__", response.status);
      const resData = await response.json();
      if (response.status !== 200) {
        setErrorMsg(resData.message);
        return;
      }
      console.log(resData);
      props.navigation.replace("Dashboard");
    } catch (exp) {
      console.error("ERROR: ", exp);
      Alert.alert("", "Some went wrong! Please try again later");
    } finally {
      setLoading(false);
    }
  };

  // onSubmitEditing

  return (
    <View style={styles.screen}>
      <View style={styles.loginContainer}>
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontSize: 48,
            fontWeight: "600",
            marginVertical: 50,
          }}
        >
          SAMVAD Login
        </Text>
        <View>
          <Input
            placeholder="Username"
            returnKeyType="next"
            onChangeText={(text: string) => setUsername(text)}
            onEndEditing={(text: string) => username.length > 0 ? setTextFieldValid(false) : {}}
            isError={isTextFieldValid}
          />
          {isTextFieldValid && (
            <View>
              <Text style={{ color: Color.error }}>{userErrorMsg}</Text>
            </View>
          )}
        </View>
        <View>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text: string) => setPassword(text)}
            isError={isTextFieldValid}
          />
          {isTextFieldValid && (
            <View>
              <Text style={{ color: Color.error }}>{userErrorMsg}</Text>
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ width: "50%" }}>
            {isLoading ? (
              <Button loading={true} disabled={false} />
            ) : (
              <TouchableNativeFeedback>
                <NativeButton title="Login" onPress={handleSubmit} />
              </TouchableNativeFeedback>
            )}
          </View>
        </View>
        {errorMsg && (
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: Color.error }}>{errorMsg}</Text>
          </View>
        )}
        <View style={styles.loader}>
          <ActivityIndicator color={Color.primary} animating={false} />
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
