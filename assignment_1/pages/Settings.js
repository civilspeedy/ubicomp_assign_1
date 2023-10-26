import React from "react";
import { Text, View } from "react-native";
import { coreStyles } from "../styles/styles";

export default function Settings() {
    return (
        <View>
            <Text style={coreStyles.h1}>Settings</Text>
            <Text>Distance Unit:</Text>
        </View>
    )
}