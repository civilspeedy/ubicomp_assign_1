import React from "react";
import { Text, View, Image, Pressable, Button, StyleSheet } from "react-native";
import { coreStyles } from "../styles/styles";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps/lib/MapView";

const trailsJson = require("../json/trail_data.json");

export default function Map() {
    return (
        <View style={{ flex: 0.8 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 50.7209,
                    longitude: -1.8904,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {
                    trailsJson.map((trail, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: trail.startLat, longitude: trail.startLong }}
                            title={trail.name} />
                    ))
                }
            </MapView>
        </View >
    )
}