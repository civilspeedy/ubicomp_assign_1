import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colours, coreStyles, defaultImpact, smallTextSize } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import * as sql from 'expo-sqlite';

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

const database = sql.openDatabase('userSaved.db');
const createDatabase = () => {
    // from Week6_Part2(Thursday)-1.pdf
    database.transaction(transaction => {
        transaction.executeSql(
            "CREATE TABLE saved_trails (id INTEGER PRIMARY KEY AUTOINCREMENT, trail_name VARCHAR(20), distance DECIMAL, difficulty VARCHAR(1), distance_from_user DECIMAL, folder_name VARCHAR(20))",
            null,
            () => console.log("Success"),
            () => console.error("something went wrong")
        );
    });
}

const addTrail = (name, distance, difficulty, distanceFromUser, folderName) => {
    database.transaction(transaction => {
        transaction.executeSql(
            "INSERT INTO saved_trails (trail_name, distance, difficulty, distance_from_user, folder_name) VALUES (?, ?, ?, ?, ?)",
            [name, distance, difficulty, distanceFromUser, folderName],
            () => console.log("Add Success"),
            (error) => console.error("something went wrong -> ", error)
        );
    });
};

const getFolder = (name) => {
    database.transaction(transaction => {
        transaction.executeSql(
            "SELECT * FROM saved_trails WHERE folder_name=?",
            [name],
            (transaction, result) => { console.log("Get Succes ->", result.rows._array) },
            (e) => console.log("Err -> ", e)
        );
    });
}

const getAllFolders = () => {
    let returnReults = [];
    database.transaction(transaction => {
        transaction.executeSql("SELECT * FROM saved_trails",
            [],
            (transaction, result) => { console.log(result.rows._array), returnReults = result.rows._array },
            (e) => console.error(e),
        );
        return returnReults;
    });
};

const dropTable = () => {
    database.transaction(transaction => {
        transaction.executeSql("DROP TABLE IF EXISTS saved_trails",
            [],
            () => console.log("table dropped"),
            (e) => console.error("err -> ", e),
        );
    });
};

dropTable();

const AddFolder = () => {
    // maybe rewrite with just fs 
    let currentfolder = "";

    const [seeModal, setModal] = useState(false);
    const [inputText, changeText] = useState("");
    const openModal = () => (setModal(true), defaultImpact());
    const closeModal = () => (setModal(false), defaultImpact());

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