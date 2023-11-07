import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Modal } from "react-native";

import { Colours, coreStyles } from "../../styles/styles";

export default function Search() {
    const [showModal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);


    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    setModal(!showModal)
                }}>
                <View style={searchStyles.modal}>
                    <Pressable style={{ margin: 20, backgroundColor: Colours.complementary, borderRadius: 10, padding: 10 }}
                        onPress={closeModal}>
                        <Text style={{ alignSelf: 'center' }}>Close</Text>
                    </Pressable>
                </View>

            </Modal>
            <Pressable style={coreStyles.bottomButtons} onPress={openModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Search</Text>
            </Pressable>
        </View>
    )
}

const searchStyles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: 'white',
        height: '20%',

    }
})