import React, { useState } from "react"
import { Modal, Pressable, View, Text, Image, StyleSheet } from "react-native"
import { coreStyles, Colours } from "../../styles/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { getSavedTrail, saveTrail } from "../../store";
import MapView from "react-native-maps";
import * as Haptics from 'expo-haptics';

const startTrail = (trail) => {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success)
}


/**A card is used to display the basic details of a trail*/
const Card = ({ trail }) => {
    return (
        <View style={{ marginTop: 20 }}>
            <View style={trailStyles.card}>
                <Text style={trailStyles.cardHeader}>{trail.name}</Text>

                <CardStats trail={trail} />
            </View>

        </View>
    )
}

const CardStats = ({ trail }) => {
    return (
        <View style={coreStyles.cardStats}>
            <Text style={coreStyles.statstext}><Text style={{ fontWeight: 'bold' }}>Distance: </Text>{trail.distance} |</Text>
            <Text style={coreStyles.statstext}> <Text style={{ fontWeight: 'bold' }}>Difficulty:</Text> {trail.difficulty} |</Text>
            <Text style={coreStyles.statstext}> <Text style={{ fontWeight: 'bold' }}>Distance From You:</Text> {trail.distanceFromUser}</Text>
        </View>
    )
}

const TrailModal = ({ trail, closeTrail }) => {
    return (
        <View style={trailStyles.trailModal}>
            <Text style={coreStyles.h1}>{trail.name}</Text>
            <CardStats trail={trail} />
            <Text style={trailStyles.description}>{trail.description}</Text>

            <Pressable style={trailStyles.button} onPress={startTrail}>
                <Text style={{ padding: 10 }}>Start Trail</Text>
            </Pressable>

            <BouncyCheckbox
                fillColor='#00FF28'
                unfillColor='white'
                size={60}
                disableText={true}
                innerIconStyle={{ borderColor: 'black', borderWidth: 3 }}
            />

            <Pressable style={trailStyles.button} onPress={closeTrail}><Text style={{ fontSize: 15, padding: 10 }}>Close</Text></Pressable>
        </View>
    )
}

/**Trail is a pressable that toggles a modal to appear showcasing more detail around a trail*/
export default function Trail({ trail }) {
    const [seeModal, setModal] = useState(false); //Modal fragments from https://reactnative.dev/docs/modal

    const openTrail = () => setModal(true);
    const closeTrail = () => setModal(false);

    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    setModal(!seeModal)
                }}>
                <TrailModal trail={trail} closeTrail={closeTrail} />
            </Modal>

            <Pressable onPress={openTrail}>
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        marginTop: 15,
    },
    saveButton: {
        borderRadius: 5,
        backgroundColor: 'cyan',
        padding: 2,
    },
    description: {
        borderColor: Colours.border,
        borderWidth: 3,
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'white',
    },
    card: {
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
        fontSize: 20,
        flex: 1,
    },

});