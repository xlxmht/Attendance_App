"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var data = [
    { id: 1, title: "Panchayat Level Review Planning Meeting" },
    { id: 2, title: "FGD" },
    { id: 3, title: "Motivation" },
    { id: 4, title: "Panchayat Level Motivation Camp" },
    { id: 5, title: "Flagship" },
    { id: 6, title: "Village Awareness Meeting" },
    { id: 7, title: "Women RIght" },
    { id: 8, title: "Monitoring Tool" }
];
var _renderGridItem = function (gridItem) {
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.8, style: styles.gridItem },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, gridItem.item.title))));
};
exports["default"] = (function (props) {
    return (react_1["default"].createElement(react_native_1.FlatList, { data: data, renderItem: _renderGridItem, numColumns: 2, keyExtractor: function (item) { return item.id.toString(); } }));
});
var styles = react_native_1.StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 100
    },
    container: {
        flex: 1,
        borderRadius: 6,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 1.5,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 16,
        fontWeight: "900",
        textAlign: 'center'
    }
});
