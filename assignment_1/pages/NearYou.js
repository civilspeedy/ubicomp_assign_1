import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Haptics from 'expo-haptics';
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Colours, coreStyles } from "../styles/styles";
import { TrailList } from "./AllTrails";
import Slider from "@react-native-community/slider";
import { StyleSheet } from "react-native";
import { CustomSlider } from "./subPages/Filters";
import Trail from "./subPages/Trail";

const trails = require('../json/trail_data.json');


/**Loops through trails json and returns list of trails that comply with the user defined max distance from them */
const getNearBy = (maxDistanceFromUser) => {
    const nearByList = []
    for (let i = 0; i < trails.length; i++) {
        if (trails[i].distanceFromUser <= maxDistanceFromUser) {
            nearByList.push(trails[i]);
        }
    }
    return nearByList;
};

export default function NearYou() {
    const [maxDistanceFromUser, setMDFUV] = useState(10);
    const updateMDFUV = (value) => (setMDFUV(value), getNearBy(value))

    getNearBy(maxDistanceFromUser);

    //needs a use state to update automatically
    return (
        <GestureHandlerRootView>
            <Text style={{ alignSelf: 'center', margin: 10 }}>Max Distance From You: <Text style={{ fontWeight: 'bold' }}>{maxDistanceFromUser}</Text> miles</Text>
            <View style={nearYouStyles.sliderContainer}>
                <CustomSlider updateFunc={updateMDFUV} contValue={maxDistanceFromUser} />
            </View>
            <ScrollView>
                {getNearBy(maxDistanceFromUser).map((trail, index) => (
                    <Trail key={index} trail={trail} />
                ))}
            </ScrollView>
        </GestureHandlerRootView>
    );
};

const nearYouStyles = StyleSheet.create({
    maxDistanceSlider: {
        flex: 1,
    },
    sliderContainer: {
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        width: '100%',
        alignSelf: 'center',
    },
});