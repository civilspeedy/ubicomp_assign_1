import React, { useEffect, useState } from "react";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import * as sql from 'expo-sqlite';
import Trail from "./subPages/Trail";
import WeatherToast from "./WeatherToast";


const database = sql.openDatabase('userSaved.db');
const trailJson = require('../json/trail_data.json');

/**Create saved_trails table in database for storing saved trails*/
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

/**Inserts a trail name into the saved_trails table
 * @param {String}name
*/
export const addTrail = (name) => {
    database.transaction(transaction => {
        transaction.executeSql(
            "INSERT INTO saved_trails (trail_name) VALUES (?)",
            [name],
            () => console.log("trail add Success"),
            (e) => console.error("err in addTrail() -> ", e)
        );
    });
};

/**Uses the give trail name to fetch a trail from saved_trail. Mostly to check if the trail is present in the database.
 * @param {String}name
 * @returns Array of trail properties
*/
const getTrail = (name) => {
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
                },
                () => { return false }
            );
        });
    });
};

/**Will delete a trail in the database based on the given trail name 
 * @param {String}name
*/
export const deleteTrails = (name) => {
    database.transaction(transaction => {
        transaction.executeSql("DELETE FROM trail WHERE folder_name=?",
            [name],
            () => console.log(name, "was delted from trails"),
            (e) => console.log("err in deleteTrail()", e),
        );
    });
};

/**Get's all entries in saved_trails
 * @returns Array of all trails
*/
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

/**Drops saved_trails table and calls createTrailTable to create the table again */
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


/**Saved trails custom component page
 * @returns Saved Trails page
*/
export default function Saved() {
    const [trails, setTrails] = useState([]);

    console.log(trails);

    const getSaved = async () => {
        try {
            const result = await getAllTrails();
            setTrails(result);
            console.log("getSaved() ->", result);
        } catch (e) {
            console.error("Err in  getSaved() ->", e);
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
        <GestureHandlerRootView style={{ flex: 1 }}>
            <WeatherToast />
            <ScrollView>
                {savedList.map((trail, index) => (
                    <Trail key={index} trail={trail} />
                ))}
            </ScrollView>
        </GestureHandlerRootView>
    )
};