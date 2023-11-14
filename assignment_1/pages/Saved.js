import React, { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colours, coreStyles, defaultImpact, smallTextSize } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import * as sql from 'expo-sqlite';
import Trail from "./subPages/Trail";

const database = sql.openDatabase('userSaved.db');

/**Creates table containg all the saved trails */
const createTrailTable = () => {
    // from Week6_Part2(Thursday)-1.pdf
    database.transaction(transaction => {
        transaction.executeSql(
            "CREATE TABLE IF NOT EXISTS saved_trails (id INTEGER PRIMARY KEY AUTOINCREMENT, trail_name VARCHAR(20), folder_name VARCHAR(20))",
            null,
            () => console.log("saved_trails table created"),
            (e) => console.error("err in createTrailTable() -> ", e)
        );
    });
}

/**Inserts a trail into the saved_trails table */
export const addTrail = (name, folderName) => {
    database.transaction(transaction => {
        transaction.executeSql(
            "INSERT INTO saved_trails (trail_name, folder_name) VALUES (?, ?)",
            [name, distance, difficulty, distanceFromUser, folderName],
            () => console.log("trail add Success"),
            (e) => console.error("err in addTrail() -> ", e)
        );
    });
};

/**Fetches a trail  from saved_trails*/
const getTrails = (name) => {
    //needs an async useState when called
    return new Promise((resolve, reject) => { // chatGPT was asked how to return a value in function containing expo sqlite. Lines 33, 38 and 42.
        database.transaction(transaction => {
            transaction.executeSql(
                "SELECT * FROM saved_trails WHERE folder_name=?",
                [name],
                (transaction, result) => {
                    resolve(result.rows._array);
                },
                (e) => {
                    console.error("err in getTrails() -> ", e);
                    reject(e);
                }
            );
        });
    });
};

/**Fetches all the trails in saved_trails */
const getAllTrails = () => {
    return new Promise((resolve, reject) => {
        database.transaction(transaction => {
            transaction.executeSql(
                "SELECT * FROM saved_trails",
                null,
                (transaction, result) => resolve(result.rows._array),
                (e) => {
                    console.error("err in getAllTrails() -> ", e);
                    reject(e);
                }
            );
        });
    });
};

/**drops saved_trails table and creates it again */
const resetTrails = () => {
    console.log("here")
    database.transaction(transaction => {
        transaction.executeSql("DROP TABLE IF EXISTS saved_trails",
            null,
            () => console.log("table dropped"),
            (e) => console.error("err in dropTable() -> ", e),
        );
    });
    createTrailTable();
};

/**Creates a table for storing all the folder names */
const createFolderTable = () => {
    database.transaction(transaction => {
        transaction.executeSql(
            "CREATE TABLE folders (name VARCHAR(20) PRIMARY KEY)",
            null,
            () => console.log("folders table created"),
            (e) => console.error("err in createFolderTable() ->", e),
        );
    });
};

/** Drops folders table  and calls createFolderTable()*/
const resetFolders = () => {
    database.transaction(transaction => {
        transaction.executeSql("DROP TABLE IF EXISTS folders",
            null,
            () => console.log("table dropped"),
            (e) => console.error("err in dropTable() -> ", e),
        );
    });
    createFolderTable();
};

/**Inserts a folder name into folders table */
const addFolderDb = (name) => {
    database.transaction(transaction => {
        transaction.executeSql(
            "INSERT INTO folders (name) VALUES (?)",
            [name],
            () => console.log("folder add success"),
            (e) => console.error("err in addFolderDb() -> ", e),
        )
    });
};

/**Fetches all the folder names in folders table*/
const getAllFolders = () => {
    return new Promise((resolve, reject) => {
        database.transaction(transaction => {
            transaction.executeSql(
                "SELECT * FROM folders",
                null,
                (transaction, result) => {
                    resolve(result.rows._array);
                },
                (e) => {
                    console.error("err in getAllFolders() -> ", e)
                    reject(e);
                }
            );
        });
    });
};



const Folder = ({ name }) => {
    const [showModal, setModal] = useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const [trails, setTrails] = useState([]);

    const getTrailsAsync = async () => {
        try {
            const result = await getTrails(name);
            setTrails(result);
            console.log("getTrails()->", result);
        } catch (error) {
            console.error("Err in getTrailsAsync() ->", error);
        }
    };

    useEffect(() => {
        getTrailsAsync();
    }, []);


    const trailList = () => {
        const allTrails = require('../json/trail_data.json');
        let trailListToReturn = [];

        for (let i = 0; i < allTrails.length; i++) {
            for (let j = 0; j < trails.length; i++) {
                if (allTrails[i].name == trails[j].name) {
                    console.log("looking at ->", allTrails[i].name, " and ", trails[j].name)
                    trailListToReturn.push(allTrails[i]);
                };
            };
        };
        return trailListToReturn;
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    setModal(!showModal);
                }}
            >
                <View style={savedStyles.folderModalContainer}>
                    <View style={savedStyles.folderModal}>
                        <Text style={savedStyles.title}>{name}</Text>
                        <GestureHandlerRootView>
                            <ScrollView>
                                {trailList().map((trail, index) => (
                                    <Trail key={index} trail={trail} />
                                ))}
                            </ScrollView>
                        </GestureHandlerRootView>
                    </View>
                </View>
            </Modal>
            <Pressable style={savedStyles.savedFolder} onPress={openModal}>
                <Text style={savedStyles.folderText}>{name}</Text>
            </Pressable>
        </View>
    );
}

const AddFolder = ({ folderFunc }) => {

    const [seeModal, setModal] = useState(false);
    const [inputText, changeText] = useState("");

    const openModal = () => (setModal(true), defaultImpact());
    const closeModal = () => (setModal(false), defaultImpact());

    const addOnButtonPress = async () => {
        addFolderDb(inputText);
        folderFunc();
        closeModal();
    };

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
                            <Pressable onPress={() => (closeModal(), addOnButtonPress())} style={savedStyles.button}>
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
};

export let globalFolders = [];

export default function Saved() {
    const [folders, setFolders] = useState([]);

    const getAllFoldersAsync = async () => {
        try {
            const result = await getAllFolders();
            setFolders(result);
            console.log("getAllFolders() ->", result);
        } catch (error) {
            console.error("Err in getAllFoldersAsync() ->", error);
        }
    };

    useEffect(() => {
        getAllFoldersAsync();
    }, []);

    globalFolders = folders;

    return (
        <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
            <Text style={savedStyles.title}>Folders</Text>
            <ScrollView>
                {folders.map((folder, index) => (
                    <Folder key={index} name={folder.name} />
                ))}
                <AddFolder folderFunc={getAllFoldersAsync} />
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
        fontWeight: 'bold',
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

    title: {
        fontWeight: 'bold',
        fontSize: smallTextSize + 20,
        alignSelf: "center",
        margin: 10,
    },

    folderModal: {
        backgroundColor: Colours.secondary,
        width: '100%',
        height: '50%',
        borderRadius: 20,
    },

    folderModalContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    },
})