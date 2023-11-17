import React, { useState } from "react"
import { Modal, View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Colours, coreStyles, defaultImpact, sliderImpacts, smallTextSize } from "../../styles/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Slider from "@react-native-community/slider";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


/**Object to keep track of what filters have been changed*/
let filterJson = {
    maxDistanceFromUser: 10,
    maxDistance: 10,
    hard: true,
    medium: true,
    easy: true,
};

const easyFilter = (value) => filterJson.easy = value;
const medFilter = (value) => filterJson.medium = value;
const hardFilter = (value) => filterJson.hard = value;


/**A custom slider component ranging from 0 to 10
 * @param {Function}updateFunc used to pass useStates to be used in other components
 * @param {Function}constValue the value effected by the useState 
 * @returns {Slider}
*/
export const CustomSlider = ({ updateFunc, constValue }) => {
    return (
        <Slider style={filterPageStyles.distSlider}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor={Colours.secondary}
            step={1}
            value={constValue}
            onValueChange={(value) => (updateFunc(value), sliderImpacts())}
            thumbTintColor={Colours.secondary}
        />
    );
}

/**Component containing the modal housing all the filter options
 * @param {Function}update passes the useState function to update the filters
 * @returns {View}
*/
export default function Filters({ update }) {
    const [showModal, setModal] = useState(false);

    const openModal = () => (setModal(true), defaultImpact());
    const closeModal = () => (setModal(false), defaultImpact(), update(filterJson));


    const [showEasy, setEasy] = useState(true);
    const [showMedium, setMedium] = useState(true);
    const [showHard, setHard] = useState(true);


    const [maxDistanceFromUserValue, setMDFUV] = useState(10);
    const updateMDFUV = (value) => (setMDFUV(value), filterJson.maxDistanceFromUser = value);

    const [maxDistance, setMaxDistance] = useState(10);
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
                                <Text style={filterPageStyles.sliderText}>Select Max Distance From You: <Text style={{ fontWeight: 'bold' }}>{maxDistanceFromUserValue}</Text> miles</Text>
                                <CustomSlider updateFunc={updateMDFUV} constValue={maxDistanceFromUserValue} />
                            </View>
                        </View>

                        <View style={filterPageStyles.overallSliderContainer}>
                            <View style={filterPageStyles.sliderContainer}>
                                <Text style={filterPageStyles.sliderText}>Select Max Trail Distance: <Text style={{ fontWeight: 'bold' }}>{maxDistance}</Text> miles</Text>
                                <CustomSlider updateFunc={upDateMaxDistance} constValue={maxDistance} />
                            </View>
                        </View>

                        <View style={filterPageStyles.checkBoxContainer}>
                            {/*from fragment https://github.com/WrathChaos/react-native-bouncy-checkbox */}
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

                        <Pressable style={{ margin: 20, backgroundColor: Colours.complementary, borderRadius: 10, padding: 10, borderWidth: 3 }}
                            onPress={closeModal}>
                            <Text style={{ alignSelf: 'center' }}>Close and Apply</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal >

            <Pressable style={coreStyles.bottomButtons} onPress={openModal}>
                <MaterialCommunityIcons name="menu" size={50} />
            </Pressable >
        </View >
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
        alignSelf: 'center',
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

    sliderText: {
        fontSize: smallTextSize,
    },
})