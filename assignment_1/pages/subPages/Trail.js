import React, { useState } from "react"
import { Alert, Modal, Pressable, View, Text } from "react-native"
import { coreStyles } from "../../styles/styles";

/**A card is used to display the basic details of a trail*/
const Card = ({ trail }) => {
    return (
        <View>
            <View style={coreStyles.card}>
                <Text style={coreStyles.cardHeader}>{trail.name}</Text>

                <View style={coreStyles.cardStats}>
                    <Text><Text style={{ fontWeight: 'bold' }}>Distance: </Text>{trail.distance} |</Text>
                    <Text> <Text style={{ fontWeight: 'bold' }}>Difficulty:</Text> {trail.difficulty} |</Text>
                    <Text> <Text style={{ fontWeight: 'bold' }}>Distance From You:</Text> {trail.distanceFromUser}</Text>
                </View>
            </View>

            <View style={{ padding: 10 }} />
        </View>
    )
}

const TrailModal = ({ trail, closeTrail }) => {
    return (
        <View style={coreStyles.trailModal}>
            <Text style={coreStyles.h1}>{trail.name}</Text>
            <Pressable onPress={closeTrail}><Text>Close</Text></Pressable>
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
                animationType='fade'
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