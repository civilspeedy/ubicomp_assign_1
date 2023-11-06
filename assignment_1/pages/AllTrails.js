import React from "react";
import { Text } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { coreStyles } from "../styles/styles";
import { TrailList } from "./NearYou";

const trails = require('../json/trail_data.json');

export default function AllTrails() {
    return (
        <GestureHandlerRootView>
            <Text style={coreStyles.h1}>All Trails</Text>
            <TrailList trails={trails} />
        </GestureHandlerRootView>
    );
};