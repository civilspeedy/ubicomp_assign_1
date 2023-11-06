import React, { useState } from "react"
import { Modal, Pressable, View, Text, Image } from "react-native"
import { coreStyles } from "../../styles/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { getSavedTrail, saveTrail } from "../../store";
import MapView from "react-native-maps";


/**A card is used to display the basic details of a trail*/
const Card = ({ trail }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={coreStyles.card}>
                <Text style={coreStyles.cardHeader}>{trail.name}</Text>

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
        <View style={coreStyles.trailModal}>
            <Text style={coreStyles.h1}>{trail.name}</Text>
            <CardStats trail={trail} />
            <Text style={coreStyles.description}>{trail.description}</Text>

            <Pressable >
                <Text>Start Trail</Text>
            </Pressable>

            <BouncyCheckbox
                fillColor='#00FF28'
                unfillColor='white'
                size={60}
                disableText={true}
                innerIconStyle={{ borderColor: 'black', borderWidth: 3 }}
                imageComponent={<Image source={require('../../assets/saved.png')} style={{ width: 50, height: 50 }} />}
            />

            <Pressable style={coreStyles.closeButton} onPress={closeTrail}><Text style={{ fontSize: 15, padding: 10 }}>Close</Text></Pressable>
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