import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Colours, coreStyles } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

//set up saving functionality
//set up saved reading functionality


//from: https://stackoverflow.com/questions/29452822/how-to-fetch-data-from-local-json-file-on-react-native
const savedData = require('../json/user_saved.json');
const folders = savedData.folders;

const Folder = () => {
    return (
        <Pressable style={savedStyles.savedFolder} >
            <Text style={savedStyles.folderText}>{folders["saved #1"].name}</Text>
        </Pressable>
    );
}

const AddFolder = () => {
    const [seeModal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    // this will be a button to add a new folder
    return (

        //needs aligning 
        <View style={{ flex: 1 }}>
            <Modal
                style={{ flex: 1 }}
                animationType='slide'
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    setModal(!seeModal)
                }}>
                <View style={savedStyles.createFolder}>
                    <Pressable onPress={closeModal}>
                        <Text>close</Text>
                    </Pressable>
                </View>
            </Modal>

            <Pressable style={savedStyles.savedFolder} onPress={openModal}>
                <Text>+</Text>
            </Pressable>
        </View>
    )
}

export default function Saved() {
    return (
        <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
            <Text style={coreStyles.h1}>Your Saved Trails</Text>
            <ScrollView>
                <View style={savedStyles.folderContainer}>
                    <Folder />
                    <AddFolder />
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

const savedStyles = StyleSheet.create({
    savedFolder: {
        backgroundColor: Colours.primary,
        borderRadius: 10,
        borderColor: Colours.border,
        borderWidth: 3,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 30,
        padding: 10,
        marginBottom: 10,
    },
    folderContainer: {
        flex: 0.9,
    },
    createFolder: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '100%',
        height: '25%'
    },
})