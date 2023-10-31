import React from "react";
import { Text, View, Image, Pressable, Button } from "react-native";
import { coreStyles } from "../styles/styles";
import MapView from "react-native-maps";

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
        <View style={coreStyles.mapContainer}>
            <MapView
                style={coreStyles.map}
                initialRegion={{
                    latitude: 50.7209,
                    longitude: -1.8904,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View >
    )
}