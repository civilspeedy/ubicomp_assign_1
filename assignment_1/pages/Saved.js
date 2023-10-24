import React from "react";
import { Pressable, Text, View } from "react-native";
import { coreStyles } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";


//from: https://stackoverflow.com/questions/29452822/how-to-fetch-data-from-local-json-file-on-react-native
const savedData = require('../json/user_saved.json');
const folders = savedData.folders;

const Folder = ({ navigation }) => {
    return (
        <Pressable style={coreStyles.card} >
            <Text style={coreStyles.h1}>{folders["saved #1"].name}</Text>
        </Pressable>
    )
}

export default function Saved() {
    return (
        <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
            <ScrollView>
                <Text style={coreStyles.h1}>Your Saved Trails</Text>
                <Folder />
            </ScrollView>
        </GestureHandlerRootView>
    )
}

