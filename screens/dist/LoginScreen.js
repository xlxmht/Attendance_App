"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Input_1 = require("../components/Input");
var color_1 = require("../constants/color");
exports["default"] = (function (props) {
    var handleClick = function () {
        // console.log("Clicked handler")
        props.navigation.navigate("Dashboard");
        return;
        fetch("http://localhost:2020/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "test@gmail.com",
                password: "test"
            })
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (data) {
            console.log(data);
        })["catch"](function (exp) {
            console.error("ERROR: ", exp);
        });
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.screen },
        react_1["default"].createElement(react_native_1.View, { style: styles.loginContainer },
            react_1["default"].createElement(react_native_1.Text, { style: { alignSelf: "center", textAlign: 'center', fontSize: 48, fontWeight: "600", marginVertical: 50 } }, "SAMVAD Login"),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(Input_1["default"], { style: { fontSize: 18 }, placeholder: "Username" })),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(Input_1["default"], { placeholder: "Password", secureTextEntry: true })),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", justifyContent: "center", marginVertical: 20 } },
                react_1["default"].createElement(react_native_1.View, { style: { width: "50%" } },
                    react_1["default"].createElement(react_native_1.Button, { title: "Login", color: color_1["default"].primary, onPress: handleClick }))),
            react_1["default"].createElement(react_native_1.View, { style: styles.loader },
                react_1["default"].createElement(react_native_1.ActivityIndicator, { color: color_1["default"].primary, animating: false })))));
});
var styles = react_native_1.StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loginContainer: {
        maxWidth: "80%",
        width: "100%",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5
    },
    loader: {
        position: "relative",
        right: -95,
        bottom: 26,
        zIndex: 999999
    }
});
