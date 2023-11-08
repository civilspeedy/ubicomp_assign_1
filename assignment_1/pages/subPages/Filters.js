import React, { useState } from "react"
import { Modal, View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Colours, coreStyles } from "../../styles/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { filterJson } from "../../store";
import Slider from "@react-native-community/slider";
import * as Haptics from 'expo-haptics';

const easyFilter = (value) => filterJson.easy = value;
const medFilter = (value) => filterJson.medium = value;
const hardFilter = (value) => filterJson.hard = value;


const CustomSlider = ({ updateFunc, constValue }) => {
    return (
        <Slider style={filterPageStyles.distSlider}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={Colours.secondary}
            step={1}
            value={constValue}
            onValueChange={(value) => (updateFunc(value), Haptics.selectionAsync())}
            thumbTintColor={Colours.secondary}
        />
    );
}

export default function Filters() {
    const [showModal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => (setModal(false), Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success));


    const [showEasy, setEasy] = useState(true);
    const [showMedium, setMedium] = useState(true);
    const [showHard, setHard] = useState(true);


    const [maxDistanceFromUserValue, setMDFUV] = useState(100);
    const updateMDFUV = (value) => (setMDFUV(value), filterJson.maxDistanceFromUser = value);

    const [maxDistance, setMaxDistance] = useState(100);
    const upDateMaxDistance = (value) => (setMaxDistance(value), filterJson.maxDistance = value);


    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    setModal(!showModal)
                }}>
                <View style={filterPageStyles.filterModalContainer}>
                    <View style={filterPageStyles.filterModal}>

                        <View style={filterPageStyles.overallSliderContainer}>
                            <View style={filterPageStyles.sliderContainer}>
                                <Text>Select Max Distance From You:</Text>
                                <CustomSlider updateFunc={updateMDFUV} constValue={maxDistanceFromUserValue} />
                            </View>
                            <Text style={{ flex: 1, alignSelf: 'center' }}>{maxDistanceFromUserValue}m</Text>
                        </View>

                        <View style={filterPageStyles.overallSliderContainer}>
                            <View style={filterPageStyles.sliderContainer}>
                                <Text>Select Max Trail Distance:</Text>
                                <CustomSlider updateFunc={upDateMaxDistance} constValue={maxDistance} />
                            </View>
                            <Text style={{ flex: 1, alignSelf: 'center' }}>{maxDistance}m</Text>
                        </View>

                        <View style={filterPageStyles.checkBoxContainer}>

                            {/*from https://github.com/WrathChaos/react-native-bouncy-checkbox*/}
                            <View style={filterPageStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={filterPageStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => (setEasy(isChecked), easyFilter(isChecked))}
                                    isChecked={showEasy} />
                                <Text>Easy</Text>
                            </View>
                            {/*chatgpt was asked how to store the state of checkbox -> onPress={(isChecked) => setEasy(isChecked)}*/}
                            <View style={filterPageStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={filterPageStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => (setMedium(isChecked), medFilter(isChecked))}
                                    isChecked={showMedium} />
                                <Text>Medium</Text>
                            </View>

                            <View style={filterPageStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={filterPageStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => (setHard(isChecked), hardFilter(isChecked))}
                                    isChecked={showHard} />
                                <Text>Hard</Text>
                            </View>

                        </View>

                        <Pressable style={{ margin: 20, backgroundColor: Colours.complementary, borderRadius: 10, padding: 10 }}
                            onPress={closeModal}>
                            <Text style={{ alignSelf: 'center' }}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable style={coreStyles.bottomButtons} onPress={openModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Filters</Text>
            </Pressable>
        </View>
    )
}

const filterPageStyles = StyleSheet.create({
    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    checkBox: {
        alignSelf: 'center',
    },

    filterModalContainer: {
        justifyContent: 'flex-end',
        flex: 1,
        marginTop: 15,
    },

    distSlider: {
        width: '80%',
    },

    filterModal: {
        width: '90%',
        height: '40%',
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: Colours.border,
        borderWidth: 3,
        alignSelf: 'center',
    },

    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    checkBoxTextContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        paddingHorizontal: 20,
    },
    overallSliderContainer: {
        flex: 1,
        margin: 20,
    },
})