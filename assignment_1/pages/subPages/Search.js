import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { Modal } from "react-native";
import { Colours, coreStyles } from "../../styles/styles";
import * as Haptics from 'expo-haptics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Search() {
    const [showModal, setModal] = useState(false);

    const openModal = () => (setModal(true), Haptics.notificationAsync());
    const closeModal = () => (setModal(false), Haptics.notificationAsync());


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
                <MaterialCommunityIcons name="map-search" size={50} />
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