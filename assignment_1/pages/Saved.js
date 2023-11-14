import React, { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colours, coreStyles, defaultImpact, smallTextSize } from "../styles/styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import * as sql from 'expo-sqlite';
import Trail from "./subPages/Trail";


const database = sql.openDatabase('userSaved.db');
const trailJson = require('../json/trail_data.json');

/**Creates table containg all the saved trails */
const createTrailTable = () => {
    // from Week6_Part2(Thursday)-1.pdf
    database.transaction(transaction => {
        transaction.executeSql(
            "CREATE TABLE IF NOT EXISTS saved_trails (id INTEGER PRIMARY KEY AUTOINCREMENT, trail_name VARCHAR(20))",
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
            "INSERT INTO saved_trails (trail_name) SELECT ? WHERE NOT EXISTS (SELECT 1 FROM saved_trails WHERE trail_name = ?)",
            [name],
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

export const deleteTrail = ({ name }) => {
    database.transaction(transaction => {
        transaction.executeSql("DELETE FROM trail WHERE folder_name=?",
            [name],
            () => console.log(name, "was delted from trails"),
            (e) => console.log("err in deleteTrail()", e),
        );
    });
};

/**Fetches all the trails in saved_trails */
export const getAllTrails = () => {
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
            () => console.log("trails table dropped"),
            (e) => console.error("err in dropTable() -> ", e),
        );
    });
    createTrailTable();
};

export default function Saved() {
    const [trails, setTrails] = useState([]);

    const getSaved = async () => {
        try {
            const result = await getAllTrails();
            setTrails(result);
            console.log("getAllFolders() ->", result);
        } catch (error) {
            console.error("Err in  getSaved() ->", error);
        }
    };

    useEffect(() => {
        getSaved();
    }, []);

    const savedList = [];
    for (let i = 0; i < trails.length; i++) {
        for (let j = 0; j < trailJson.length; j++) {
            if (trails[i].trail_name == trailJson[j].name) {
                savedList.push(trailJson[j]);
            };
        };
    };

    return (
        <GestureHandlerRootView style={coreStyles.gestureHandlerRootView}>
            <ScrollView>
                {savedList.map((trail, index) => (
                    <Trail key={index} trail={trail} />
                ))}
            </ScrollView>
        </GestureHandlerRootView>
    )
}

const savedStyles = StyleSheet.create({
})