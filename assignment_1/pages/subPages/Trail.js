import React, { useState, useEffect } from "react"
import { Modal, Pressable, View, Text, Image, StyleSheet } from "react-native"
import { coreStyles, Colours, smallTextSize, defaultImpact } from "../../styles/styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const startTrail = (trail) => {
    defaultImpact()
}


/**A card is used to display the basic details of a trail*/
const Card = ({ trail }) => {
    return (
        <View style={{ marginTop: 20, flex: 1, marginBottom: 3, }}>
            <View style={trailStyles.card}>
                <Text style={trailStyles.cardHeader}>{trail.name}</Text>

                <CardStats trail={trail} />
            </View>
        </View>
    )
};

export const CardStats = ({ trail }) => {
    return (
        <View style={trailStyles.cardStats}>
            <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance: </Text>{trail.distance}</Text>
            <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Difficulty:</Text> {trail.difficulty}</Text>
            <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance From You:</Text> {trail.distanceFromUser}</Text>
        </View>
    )
}

const TrailModal = ({ trail, closeTrail }) => {
    const [saved, setSaved] = useState(true);
    const [buttonIcon, setIcon] = useState("cards-heart-outline");

    const fillHeart = () => setIcon("cards-heart");
    const emptyHeart = () => setIcon("cards-heart-outline");

    const heartPress = () => {
        defaultImpact();
        setSaved(!saved);
        console.log("saved =", saved);
        if (saved == true) {
            fillHeart();
        };
        if (saved == false) {
            emptyHeart();
        }
    };

    return (
        <View style={trailStyles.trailModal}>
            <Text style={coreStyles.h1}>{trail.name}</Text>

            <View style={trailStyles.inModalStats}>
                <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance: </Text>{trail.distance} </Text>
                <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Difficulty:</Text> {trail.difficulty} </Text>
                <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance From You:</Text> {trail.distanceFromUser} </Text>
            </View>

            <Text style={trailStyles.description}>{trail.description}</Text>

            <Pressable style={trailStyles.button} onPress={startTrail}>
                <Text style={{ padding: 10 }}>Start Trail</Text>
            </Pressable>

            <Pressable style={trailStyles.saveButton} onPress={heartPress}>
                <MaterialCommunityIcons name={buttonIcon} size={75} color={Colours.complementary} />
            </Pressable>

            <Pressable style={trailStyles.button} onPress={closeTrail}>
                <Text style={{ fontSize: 15, padding: 10 }}>Close</Text>
            </Pressable>
        </View>
    );
};


/**Trail is a pressable that toggles a modal to appear showcasing more detail around a trail*/
export default function Trail({ trail }) {
    const [seeModal, setModal] = useState(false); //Modal fragments from https://reactnative.dev/docs/modal

    const openTrail = () => setModal(true);
    const closeTrail = () => setModal(false);

    return (
        <View>
            <Modal
                style={{ alignItems: 'flex-end', flex: 1 }}
                animationType='slide'
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    setModal(!seeModal)
                }}>
                <TrailModal trail={trail} closeTrail={closeTrail} />
            </Modal>

            <Pressable onPress={openTrail} style={{ flex: 1 }}>
                <Card trail={trail} />
            </Pressable>

        </View>
    )
}

const trailStyles = StyleSheet.create({
    button: {
        backgroundColor: Colours.complementary,
        borderRadius: 5,
        margin: 10,
    },
    trailModal: {
        backgroundColor: Colours.secondary,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        marginTop: 15,
    },
    saveButton: {
        margin: 10,
        padding: 20,
    },

    description: {
        borderColor: Colours.border,
        borderWidth: 3,
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'white',
    },
    card: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        backgroundColor: Colours.primary,
        borderRadius: 10,
        borderColor: Colours.border,
        borderWidth: 3,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },

    cardHeader: {
        fontWeight: 'bold',
        fontSize: smallTextSize + 8.5,
        flex: 1,
        alignSelf: 'center',
    },
    cardText: {
        alignSelf: 'flex-start',
        flex: 1,
    },

    cardStats: {
        display: 'flex',

        marginHorizontal: 10,
    },

    statstext: {
        fontSize: smallTextSize,
    },

    inModalStats: {
        flexDirection: 'row',
    },
});