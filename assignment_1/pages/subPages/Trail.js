import React, { useState, useEffect } from "react"
import { Modal, Pressable, View, Text, Image, StyleSheet, ViewComponent } from "react-native"
import { coreStyles, Colours, smallTextSize, defaultImpact } from "../../styles/styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const startTrail = (trail) => {
    defaultImpact()
}


/**A card is used to display the basic details of a trail for use in a pressable    
 * @param {JSON}trail
 * @returns {ViewComponent}
*/
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

/**a small comonent for easy repititon of a trails stats
 * @param {JSON}trail
 * @returns {ViewComponent}
*/
export const CardStats = ({ trail }) => {
    return (
        <View style={trailStyles.cardStats}>
            <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance: </Text>{trail.distance}</Text>
            <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Difficulty:</Text> {trail.difficulty}</Text>
            <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance From You:</Text> {trail.distanceFromUser}</Text>
        </View>
    )
}

/**Components for use in the trail modal 
 * @param {JSON}trail
 * @param {View}
*/
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
            <Text style={trailStyles.heading}>{trail.name}</Text>

            <View style={trailStyles.inModalStats}>
                <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance: </Text>{trail.distance} </Text>
                <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Difficulty:</Text> {trail.difficulty} </Text>
                <Text style={trailStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance From You:</Text> {trail.distanceFromUser} </Text>
            </View>

            <Text style={trailStyles.description}>{trail.description}</Text>

            <View style={{ flexDirection: 'row' }}>
                <Pressable style={trailStyles.startButton} onPress={startTrail}>
                    <Text style={{ padding: 10 }}>Start Trail</Text>
                </Pressable>

                <Pressable style={trailStyles.saveButton} onPress={heartPress}>
                    <MaterialCommunityIcons name={buttonIcon} size={75} color={Colours.complementary} />
                </Pressable>
            </View>

            <Pressable style={trailStyles.button} onPress={closeTrail}>
                <Text style={{ fontSize: 15, padding: 10 }}>Close</Text>
            </Pressable>
        </View>
    );
};


/**Trail is a pressable that toggles a modal to appear showcasing more detail around a trail
 * @param {JSON}trail
 * @returns {ViewComponent}
*/
export default function Trail({ trail }) {
    const [seeModal, setModal] = useState(false); //Modal fragments from https://reactnative.dev/docs/modal

    const openTrail = () => setModal(true);
    const closeTrail = () => (setModal(false), defaultImpact());

    return (
        <View>
            <Modal
                style={{ flex: 1 }}
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
        borderRadius: 20,
        margin: 10,
        height: 50,
        justifyContent: 'center',
        borderWidth: 3,
    },
    trailModal: {
        backgroundColor: Colours.secondary,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        marginTop: 15,
    },

    startButton: {
        backgroundColor: Colours.complementary,
        borderRadius: 20,
        margin: 10,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 30,
        borderWidth: 3
    },

    saveButton: {
        marginHorizontal: 30,
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

    heading: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});