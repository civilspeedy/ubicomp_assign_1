import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { coreStyles } from "../styles/styles";

const MapControls = () => {
    return (
        <View style={coreStyles.mapControlsContainer}>
            <Pressable><Text>Start</Text></Pressable>
            <Pressable><Text>Saved</Text></Pressable>
        </View>
    )
}

export default function Map() {
    return (
        <View>
            <View style={coreStyles.mapContainer}>
                <Image source={require('../assets/placeholdermap.jpg')} style={coreStyles.map} resizeMode="stretch" />
                <MapControls />
            </View>
        </View>
    )
}