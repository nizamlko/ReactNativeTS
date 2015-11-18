/// <reference path="../../../typings/tsd.d.ts"/>

import React from "react-native";
const { StyleSheet, Text, View } = React;
const Button = require("react-native-button");
const Actions = require("react-native-router-flux").Actions;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});


export default class Main extends React.Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload, {"\n"}
                    Cmd+D or shake for dev menu
                </Text>
                <Button onPress={Actions.locations}>
                    Go to Locations
                </Button>
            </View>
        );
    }
}
