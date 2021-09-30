import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Loading(){
    return (
    <View style={styles.container}>
        <Text style={StyleSheet.text}>
            getting fucking weather
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor : "#FDF6AA",
        // React-native에서만 사용하는 속성
        paddingHorizontal : 30,
        paddingVertical : 100
    },
    text : {
        color : "#2c2c2c",
        fontSize : 30,      //px를 붙이면 ""안에 String으로 써야함

    }
});