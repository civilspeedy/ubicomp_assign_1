import React, { useState } from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { CustomSlider } from "./subPages/Filters";
import Trail from "./subPages/Trail";
import { smallTextSize } from "../styles/styles";

const trails = require('../json/trail_data.json');


/**Loops through trails json and returns list of trails that comply with the user defined max distance from them
 * @param {number}maxDistanceFromUser
*/
const getNearBy = (maxDistanceFromUser) => {
    const nearByList = []
    for (let i = 0; i < trails.length; i++) {
        if (trails[i].distanceFromUser <= maxDistanceFromUser) {
            nearByList.push(trails[i]);
        }
    }
    return nearByList;
};

/**Component containing the page showcasing all the trails near the user */
export default function NearYou() {
    const [maxDistanceFromUser, setMDFUV] = useState(10);
    const updateMDFUV = (value) => (setMDFUV(value), getNearBy(value))

    getNearBy(maxDistanceFromUser);
    
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <View style={{flex: 0.1}}>
                <Text style={{ alignSelf: 'center', margin: 10, fontSize: smallTextSize + 4 }}>Max Distance From You: <Text style={{ fontWeight: 'bold' }}>{maxDistanceFromUser}</Text> miles</Text>
                <View style={nearYouStyles.sliderContainer}>
                <CustomSlider updateFunc={updateMDFUV} contValue={maxDistanceFromUser} />
            </View>
            </View>
            
            <ScrollView style={{flex: 1}}>
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
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        width: '100%',
        alignSelf: 'center',
    },
});