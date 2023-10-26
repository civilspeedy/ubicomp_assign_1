import React, { useState } from "react"
import { Modal, View, Text, Pressable } from "react-native";
import { coreStyles } from "../../styles/styles";

const MaxDistanceModal = ({ closeModal }) => {
    return (
        <View style={coreStyles.distModal}>
            <Pressable onPress={closeModal}><Text>close</Text></Pressable>
            <Text>Select Max Distance:</Text>
            { //slider here}
        </View>
    )

}

export default function MaxDistance() {
    const [seeModal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    setModal(!seeModal)
                }}>
                <View style={coreStyles.distModalContainer}>
                    <MaxDistanceModal closeModal={closeModal} />
                </View>
            </Modal>

            <Pressable style={coreStyles.distButton} onPress={openModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Max Distance</Text>
            </Pressable>
        </View>
    )
}