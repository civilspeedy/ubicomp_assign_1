import React, { useState } from "react"
import { Modal, View, Text, Pressable } from "react-native";
import { Colours, coreStyles } from "../../styles/styles";
import { Slider } from "react-native-awesome-slider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSharedValue } from 'react-native-reanimated';

import { filterJson } from "../../store";
import RNReactNativeHapticFeedback from "react-native-haptic-feedback";

const easyFilter = (value) => filterJson.easy = value;
const medFilter = (value) => filterJson.medium = value;
const hardFilter = (value) => filterJson.hard = value;

const CustomSlider = () => {
    const valueNow = 0;

    // initial fragment from https://github.com/alantoa/react-native-awesome-slider
    return (
        <Slider
            style={{ width: '75%', height: 30, zIndex: 10 }}
            progress={useSharedValue(valueNow)}
            minimumValue={useSharedValue(0)}
            maximumValue={useSharedValue(50)}
            disable={false}
            step={1}
            theme={{
                maximumTrackTintColor: Colours.primary,
                minimumTrackTintColor: Colours.secondary
            }}
            onHapticFeedback={() => {
                RNReactNativeHapticFeedback.trigger('impactLight', {
                    enableVibrateFallback: true,
                    ignoreAndroidSystemSettings: false,
                });
            }}
            onValueChange={e => {
                this.setState(() => {
                    return { currentValue: e }
                })
            }}
            onSlidingComplete={e => {
                this.setState(() => {
                    return { valueNow: e }
                })
            }}
        />
    );
}

export default function Filters() {
    const [showModal, setModal] = useState(false);

    const [showEasy, setEasy] = useState(true);
    const [showMedium, setMedium] = useState(true);
    const [showHard, setHard] = useState(true);


    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    setModal(!showModal)
                }}>
                <View style={coreStyles.distModalContainer}>
                    <View style={coreStyles.distModal}>

                        <Pressable style={{ margin: 20, backgroundColor: Colours.complementary, borderRadius: 10, padding: 10 }}
                            onPress={closeModal}>
                            <Text style={{ alignSelf: 'center' }}>Close</Text>
                        </Pressable>

                        <View style={coreStyles.sliderContainer}>
                            <Text>Select Max Distance From You:</Text>
                            <CustomSlider />
                        </View>

                        <View style={coreStyles.sliderContainer}>
                            <Text>Select Max Trail Distance:</Text>
                            <CustomSlider />
                        </View>

                        <View style={coreStyles.checkBoxContainer}>

                            {/*from https://github.com/WrathChaos/react-native-bouncy-checkbox*/}
                            <View style={coreStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={coreStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => (setEasy(isChecked), easyFilter(isChecked))}
                                    isChecked={showEasy} />
                                <Text>Easy</Text>
                            </View>
                            {/*chatgpt was asked how to store the state of checkbox -> onPress={(isChecked) => setEasy(isChecked)}*/}
                            <View style={coreStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={coreStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => (setMedium(isChecked), medFilter(isChecked))}
                                    isChecked={showMedium} />
                                <Text>Medium</Text>
                            </View>

                            <View style={coreStyles.checkBoxTextContainer}>
                                <BouncyCheckbox
                                    disableText={true}
                                    size={40}
                                    style={coreStyles.checkBox}
                                    fillColor={Colours.secondary}
                                    onPress={(isChecked) => (setHard(isChecked), hardFilter(isChecked))}
                                    isChecked={showHard} />
                                <Text>Hard</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Pressable style={coreStyles.filterButton} onPress={openModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Filters</Text>
            </Pressable>
        </View>
    )
}