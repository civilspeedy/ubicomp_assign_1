import React, { useEffect, useState } from "react";
import { StyleSheet, View, LogBox, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps/lib/MapView";
import { Colours, smallTextSize } from "../styles/styles";
import { CardStats } from "./subPages/Trail";
import { Text } from "react-native";

LogBox.ignoreLogs(['Warning:']); //aware of error caused by dropDownPicker, error message slowing down app testing

const trailsJson = require("../json/trail_data.json");

const MapSettings = ({ mapJumpFunc }) => {
    const [pickerState, setPicker] = useState(false);
    const [pickerValue, setValue] = useState("");
    const [pickerItems, setItems] = useState([]);
    const [selected, setSelected] = useState(null);

    const onTrailSelect = (trail) => {
        const getSelected = pickerItems.find(item => item.value === trail)?.value;
        if (getSelected) {
            setSelected(getSelected);
        }
    };


    useEffect(() => {
        const itemList = trailsJson.map((pickerTrail, index) => ({
            key: pickerTrail.id,
            label: pickerTrail.name,
            value: {
                difficulty: pickerTrail.difficulty,
                distance: pickerTrail.distance,
                distanceFromUser: pickerTrail.distanceFromUser,
                startLat: pickerTrail.startLat,
                startLong: pickerTrail.startLong,
                endLat: pickerTrail.endLat,
                endLong: pickerTrail.endLong
            },
        }));
        setItems(itemList);
    }, []);

    const expandDifficulty = (dif) => {
        switch (dif) {
            case 'E':
                return 'Easy';
            case 'M':
                return 'Medium';
            case 'H':
                return 'Hard';
        };
    };

    return (
        <View style={mapStyles.mapSettings}>
            <View style={{ margin: 10 }}>
                <DropDownPicker
                    style={mapStyles.pickerStyle}
                    open={pickerState}
                    value={pickerValue}
                    items={pickerItems}
                    setOpen={setPicker}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={(value) => { setValue(value), onTrailSelect(value), mapJumpFunc(value); }}
                    textStyle={{ fontSize: smallTextSize, fontWeight: 'bold' }}
                    dropDownContainerStyle={mapStyles.dropDown}
                    listItemContainer={{ backgroundColor: 'blue', padding: 10, alignContent: 'center' }}
                    listItemLabelStyle={mapStyles.labelStyle} />
            </View>
            <View style={mapStyles.trailInfo}>
                <Text style={{ fontSize: smallTextSize }}>
                    Distance: {pickerValue.distance} Miles | Difficulty: {expandDifficulty(pickerValue.difficulty)}
                </Text>
                <Text style={{ fontSize: smallTextSize }}>
                    Distance From You: {pickerValue.distanceFromUser} Miles
                </Text>
                <Text>Start Coordinates:</Text>
                <Text>Long: {pickerValue.startLong} Lat: {pickerValue.startLat}</Text>
                <Text>Finish Coordinates:</Text>
                <Text>Long: {pickerValue.endLong} Lat: {pickerValue.endLat}</Text>

                <Pressable style={mapStyles.startButton}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Start</Text>
                </Pressable>

            </View>
        </View>
    );
};

export default function Map() {

    const formatedSelection = (trail) => {
        return {
            latitude: trail.startLat,
            longitude: trail.startLong,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
    };

    const initialRegion = {
        latitude: 50.7209,
        longitude: -1.8904,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const [selected, setSelected] = useState(null);
    const selectedHandle = (trail) => (setSelected(formatedSelection(trail)), console.log("current selected", formatedSelection(trail)));

    return (
        <View style={mapStyles.mapContainer}>
            <MapView
                style={mapStyles.map}
                region={selected ? selected : initialRegion}
            >
                {trailsJson.map((trail) => (
                    <Marker
                        key={trail.id}
                        coordinate={{ latitude: trail.startLat, longitude: trail.startLong }}
                        title={trail.name}
                    />
                ))}
            </MapView>
            <MapSettings mapJumpFunc={selectedHandle} />
        </View>
    );
};


const mapStyles = StyleSheet.create({
    pickerStyle: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: '75%',
        margin: 10,
        borderWidth: 3,
        backgroundColor: Colours.primary
    },

    map: {
        flex: 1,
    },

    mapContainer: {
        flex: 0.75
    },

    mapSettings: {
        flex: 0.25,
    },

    dropDown: {
        margin: 9,
        width: '75%',
        alignSelf: 'center',
        alignContent: 'center',
        borderWidth: 3,
        backgroundColor: Colours.primary
    },

    itemContainer: {
        marginVertical: 10,
        backgroundColor: 'red'
    },

    labelStyle: {
        alignContent: 'center',
        alignSelf: 'center',
        flex: 1,
        width: '100%',
        padding: 10,
    },
    trailInfo: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },

    startButton: {
        backgroundColor: Colours.complementary,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 100,
        height: 50,
        borderRadius: 10,
    },
});