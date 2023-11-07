import React from "react";
import { Text } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { coreStyles } from "../styles/styles";
import { TrailList } from "./AllTrails";

const trails = require('../json/trail_data.json');

export default function NearYou() {
    //not working for some reason
    return (
        <GestureHandlerRootView>
        </GestureHandlerRootView>
    );
};