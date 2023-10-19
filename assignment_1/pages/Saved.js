import React from "react";
import { Pressable, Text, View } from "react-native";
import { coreStyles } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const Folder = () => {
    return (
        <Pressable style={coreStyles.savedFolder}>
            <Text style={coreStyles.h1}>Folder #1</Text>
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

