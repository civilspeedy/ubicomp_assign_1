import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colours, coreStyles, defaultImpact, smallTextSize } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

//from: https://stackoverflow.com/questions/29452822/how-to-fetch-data-from-local-json-file-on-react-native
const savedData = require('../json/user_saved.json');
const folders = savedData.folders;

const Folder = () => {
    return (
        <Pressable style={savedStyles.savedFolder} >
            <Text style={savedStyles.folderText}>{folders["favorites"].name}</Text>
        </Pressable>
    );
}

const AddFolder = () => {
    // maybe rewrite with just fs 
    let currentfolder = "";

    const [seeModal, setModal] = useState(false);
    const [inputText, changeText] = useState("");
    const openModal = () => (setModal(true), defaultImpact());
    const closeModal = () => (setModal(false), defaultImpact());

    // name is comming up undefined 
    const createFolder = async (name) => {
        let trailName = name;
        //from https://react-native-async-storage.github.io/async-storage/docs/usage
        let data = {
            data: {
                name: trailName,
                trails: "folder is empty"
            }
        }
        try {
            console.log(data.data.name + " <- name");
            await AsyncStorage.setItem("trails", JSON.stringify(data.data));
        }
        catch (e) {
            console.error(e);
        }
    };

    const getFolder = async (name) => {
        try {
            const folder = await AsyncStorage.getItem('trails');
            currentfolder = folder != null ? JSON.parse(folder) : null;
        }
        catch (e) {
            console.error(e);
        }
    };


    createFolder('trails');
    getFolder('trails') // only return undefined need to check keys
    console.log(currentfolder.data);

    return (

        //needs aligning 
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={seeModal}
                onRequestClose={() => {
                    setModal(!seeModal)
                }}>

                <View style={savedStyles.container}>
                    <View style={savedStyles.createFolder}>
                        <TextInput
                            style={savedStyles.input}
                            value={inputText}
                            placeholder="Give your folder a name."
                            onChangeText={changeText} />

                        <View style={savedStyles.buttonContainer}>
                            <Pressable onPress={() => (createFolder(inputText), closeModal())} style={savedStyles.button}>
                                <Text style={{ fontSize: smallTextSize }}>Create</Text>
                            </Pressable>

                            <Pressable onPress={closeModal} style={savedStyles.button}>
                                <Text style={{ fontSize: smallTextSize }}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View >
            </Modal >

            <Pressable style={savedStyles.savedFolder} onPress={openModal}>
                <Text>+</Text>
            </Pressable>
        </View >
    )
}

export default function Saved() {
    return (
        <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
            <Text style={coreStyles.h1}>Folders</Text>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },

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
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: 140,
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,
        borderColor: Colours.border,
    },
    folderText: {
        fontSize: smallTextSize + 6,
    },
    input: {
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: Colours.border,
        paddingHorizontal: 10,
        borderRadius: 20,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    button: {
        margin: 20,
        borderWidth: 3,
        borderColor: Colours.border,
        borderRadius: 20,
        padding: 10,
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colours.complementary,
    },
})