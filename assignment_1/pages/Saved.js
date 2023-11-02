import React from "react";
import { Pressable, Text, View } from "react-native";
import { coreStyles } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";


//from: https://stackoverflow.com/questions/29452822/how-to-fetch-data-from-local-json-file-on-react-native
const savedData = require('../json/user_saved.json');
const folders = savedData.folders;

const Folder = () => {
    return (
        <Pressable style={coreStyles.savedFolder} >
            <Text style={coreStyles.folderText}>{folders["saved #1"].name}</Text>
        </Pressable>
    );
}

const AddFolder = () => {
    // this will be a button to add a new folder
    return (
        <Pressable style={coreStyles.savedFolder}>
            <Text style={coreStyles.folderText}>+</Text>
        </Pressable>
    )
}

export default function Saved() {
    return (
        <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
            <Text style={coreStyles.h1}>Your Saved Trails</Text>
            <ScrollView>
                <View style={coreStyles.folderContainer}>
                    <Folder />
                    <AddFolder />
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

